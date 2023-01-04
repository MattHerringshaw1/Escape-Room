
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfilePicSchema = new Schema({
    username: String,
    img: String
        }, {
    timestamps: true
})

const ProfilePic = mongoose.model('profilepic', ProfilePicSchema)
module.exports = ProfilePic