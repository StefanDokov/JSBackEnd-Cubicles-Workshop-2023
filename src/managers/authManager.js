const User = require('../models/User');
const config = require('../config');
const jwt = require('../lib/jsonwebtoken');

exports.checkUsername  = async (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password});

exports.login = async (username, password) => {
    const user = await this.checkUsername(username);
    const isValid = await user.comparePassword(password)
    if (!user || !isValid) {
        throw 'Invalid username or password!';
    }
    
    const payload = {username: user.username};
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'});

    return token;
}