const express = require('express');
const Router = express.Router;
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accesoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const {isAuthenticated} = require('./middlewares/authMiddleware');
const router = Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);
router.get('/logout', authController.getLogout);

router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.get('/register', authController.postRegisterPage);

router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getDetails);
router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory);
router.get('/cubes/:cubeId/edit', isAuthenticated,cubeController.getEditCube);
router.post('/cubes/:cubeId/edit', cubeController.postEditCube);
router.get('/cubes/:cubeId/delete', cubeController.getDeleteCube);
router.post('/cubes/:cubeId/delete', cubeController.postDeleteCube);

router.use('/accessories', accesoryController);


module.exports = router;