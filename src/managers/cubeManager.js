const Cube = require('../models/Cube');

exports.getOneCube = (cubeId) => Cube.findById(cubeId);