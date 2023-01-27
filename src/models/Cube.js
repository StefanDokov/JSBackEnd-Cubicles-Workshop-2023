const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
        maxLength: 250,
      },
      imageUrl: {
        type: String,
        required: true,

      },
      difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    
      }

});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;