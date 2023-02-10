const User = require('../models/User');
const config = require('../config');
const jwt = require('../lib/jsonwebtoken');
const AppError = require('../utils/AppError');

exports.checkUsername = async (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.checkUsername(username);

    if (!user) {
        throw new AppError('Invalid username or password!', {user});
        
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        throw new AppError('Invalid username or password!', {user});
    }

    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, config.SECRET, { expiresIn: '2h' });

    return token;
}