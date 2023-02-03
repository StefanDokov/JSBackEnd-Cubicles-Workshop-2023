const User = require('../models/User');


exports.checkUsername  = async (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password});

exports.login = async (username, password) => {
    const user = await this.checkUsername(username);
    const isValid = await user.comparePassword(password)
    if (!user || !isValid) {
        throw 'Invalid username or password!';
    }
    

    return user;

}