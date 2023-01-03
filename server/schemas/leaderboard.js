
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeaderboardSchema = new Schema({
    mins: {
        type: Number,
        integer: true
    },
    secs: {
        type: Number,
        integer: true
    },
    username: String
})

const Leaderboard = mongoose.model('leaderboard', LeaderboardSchema)
module.exports = Leaderboard