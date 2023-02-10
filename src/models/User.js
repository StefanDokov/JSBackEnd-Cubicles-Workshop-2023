const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [5,"Username is too short! Minimum allowed length (5)"],
        unique: true,
        validate : [/^[a-zA-z0-9]+$/, 'Username must consist only latin letters and digits!']
        
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password is too short'],
        validate : [/^[a-zA-z0-9]+$/, 'Username must consist only latin letters and digits!']

    },
    
});


userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

userSchema.method('comparePassword', async function(password) {
     return bcrypt.compare(password, this.password);

});

const User = mongoose.model('User', userSchema);

module.exports = User;

