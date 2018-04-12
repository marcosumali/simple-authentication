const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testauth', () => {
    console.log('Connected to DB testauth')
});

const Schema = mongoose.Schema;

let userSchema = mongoose.Schema({
    username: String,
    password: String
});

let User = mongoose.model('User', userSchema);

module.exports = User;