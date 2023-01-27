const mongoose = require('mongoose');

const accessoriesSchema = new mongoose.Schema({
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

      }
});

const Accessories = mongoose.model('Accessories', accessoriesSchema);
module.exports = Accessories;