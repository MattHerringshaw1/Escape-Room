// ---------------------------------------- DEPENDENCIES ----------------------------------------
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 8080
// Schemas
const User = require('./schemas/user')
// Middlewares
const authenticate = require('./middlewares/authMiddleware')
const Leaderboard = require('./schemas/leaderboard')

app.use(cors())
app.use(express.json())

// Connections
mongoose.connect('mongodb+srv://er2022:dqPVSRq6ZRxSaikX@escape-room.d7uibmr.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
}, (error) => {
    if (!error) {
        console.log('Successfully connected to MongoDB Database')
    } else {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log('The server is closing in! Time to escape!!')
})

// ---------------------------------------- ADDING TO DATABASE ----------------------------------------

// ADD USER
app.post('/api/register', async (req, res) => {
    
    const { first_name, last_name, username, email, password } = req.body
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: hashedPassword
    })

    user.save((error) => {
        if (error) {
            res.json({ success: false, message: error })
        } else {
            res.json({ success: true, message: 'New user successfully registered.' })
        }
    })
})

// ADD TO LEADERBOARD
app.post('/api/leaderboard', (req, res) => {

    const {mins, secs, username} = req.body
    
    const time = new Leaderboard({
        mins: mins,
        secs: secs,
        username: username
    })
    console.log(time)
    time.save((error) => {
        if (error) {
            res.json({ success: false, message: error })
        } else {
            res.json({ success: true, message: 'Time was saved successfully'})
        }
    })
})

// ---------------------------------------- DELETING FROM DATABASE ----------------------------------------

// DELETE USER
app.delete('/api/users/:userId', (req, res) => {
    const userId = req.params.userId
    User.findByIdAndDelete(userId, (error, user) => {
        if (error) {
            res.json({ success: false, message: 'Unable to delete user' })
        } else {
            res.json({ success: true, user: user })
        }
    })
})

// ---------------------------------------- UPDATING THINGS IN THE DATABASE ----------------------------------------

// UPDATE USER
app.put('/api/users', (req, res) => {

    const { first_name, last_name, username, email, userid } = req.body
    // console.log(userid)

    const updatedUser = {
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        
    }
    console.log('Updated User:', updatedUser)
    User.findByIdAndUpdate(
        userid,
        updatedUser,
        (error, user) => {
            if (error) {
                res.json({ success: false, message: 'Unable to update user.' })
            } else {
                res.json({ success: true, user: updatedUser })
            }
        })
})

// ---------------------------------------- READING FROM DATABASE ----------------------------------------

// USER LOGIN
app.post('/api/login', async (req, res) => {
    
    const { username, password } = req.body
    const user = await User.findOne({
            username: username
    })
    console.log('USER: ', user)
    if (user) {
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            const token = jwt.sign({ username: user.username }, 'SECRETKEYJWT')

            res.json({ success: true, token: token, username: user.username, userId: user._id })
        } else {
            res.json({ success: false, message: 'Username or password is incorrect' })
        }
    }
})


app.post('/api/guest-login', async (req, res) => {
    
    const username = 'Guest'
    const password = '123456'
    const user = await User.findOne({
            username: username
    })
    if (user) {
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            const token = jwt.sign({ username: user.username }, 'SECRETKEYJWT')

            res.json({ success: true, token: token, username: user.username, userId: user._id })
        } else {
            res.json({ success: false, message: 'Username or password is incorrect' })
        }
    }
})

// LEADERBOARD GET ALL SCORES
app.get('/api/leaderboard', async (req, res) => {
    const all_scores = await Leaderboard.find()
    res.json(all_scores)
})

// LEADERBOARD GET USER SCORES
app.get('/api/user_scores', async (req, res) => {
    
    const { username } = req.body

    const user_scores = await Leaderboard.find().where('username').in(username)
    res.json(user_scores)
})

//Get user by ObjectID
app.get('/api/view-info/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
    User.findById(req.params.id)
        .then(data => {
        let first_name = data.first_name
        let last_name = data.last_name
        let email = data.email
        let username = data.username
        let user = { first_name, last_name, email, username }
        res.json(user)
})
})

    