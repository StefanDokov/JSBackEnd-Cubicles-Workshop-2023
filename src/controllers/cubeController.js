const Cube = require('../models/Cube');
const Accessories = require('../models/Accessories');
const cubeManager = require('../managers/cubeManager');
const cubeUtils = require('../utils/cubeUtils');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async(req, res) => {

    const {name, description, imageUrl, difficultyLevel} = req.body;

    let cube = new Cube({name, description, imageUrl, difficultyLevel});

    await cube.save();

    res.redirect('/');
}

exports.getDetails = async (req, res) => {
    
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

     if(!cube) {
        return res.redirect('/404');
     }

     res.render('cube/details', { cube });

}

exports.getAttachAccessory = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessories.find({
        _id: {$nin: cube.accessories}
    }).lean();
    res.render('cube/attach', { cube, accessories });
} 

exports.postAttachAccessory = async (req, res) => {
   
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    
    cube.accessories.push(accessoryId);
    cube.save();

    res.redirect(`/cubes/${cube._id}/details`);

}

exports.getEditCube = async (req, res) => {
    const cube = await cubeManager.getOneCube(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel)
    res.render('cube/edit', {cube, difficultyLevels});
}



exports.getDeleteCube = async (req, res) => {
    const cube = await cubeManager.getOneCube(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);
    
    res.render('cube/delete', {cube, difficultyLevels});
}
