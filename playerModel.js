var mongoose = require('mongoose');
var playerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    numOfOuts: {
        type: Number,
        required: true
    },
    numOfWalks: {
        type: Number,
        required: true
    },
    numOfHomeRuns: {
        type: Number,
        required: true
    },
    avgBatSpeed: {
        type: Number,
        required: true
    },
    numOfStrikes: {
        type: Number,
        required: true
    },
});
var Players = module.exports = mongoose.model('players', playerSchema);

module.exports.get = function(callback, limit) {
    Players.find(callback).limit(limit);
}