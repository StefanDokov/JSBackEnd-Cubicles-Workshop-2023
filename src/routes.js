const express = require('express');
const Router = express.Router;
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accesoryController = require('./controllers/accessoryController');

const router = Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails);

router.use('/accessory', accesoryController);


module.exports = router;