const express = require('express');
const Router = express.Router;
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accesoryController = require('./controllers/accessoryController');

const router = Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/cubes/create', cubeController.getCreateCube);
router.post('/cubes/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getDetails);
router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory);

router.use('/accessories', accesoryController);


module.exports = router;