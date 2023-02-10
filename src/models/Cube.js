const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minLength: 5
      },
      description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 250,
      },
      imageUrl: {
        type: String,
        required: true,
        validate: {
          validator: function(value) {
            return value.startsWith('http://') || value.startsWith('https://');
          },
          message: 'URL is invalid!'
        }

      },
      difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    
      }, 
      accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessories'
      }],
      owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
      }

});


const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;