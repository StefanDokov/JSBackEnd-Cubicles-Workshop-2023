const express = require('express');
const Router = express.Router;
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accesoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const {isAuthenticated} = require('./middlewares/authMiddleware');
const {handleRequest} = require('./utils/requestUtils');
const router = Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);
router.get('/logout', authController.getLogout);

router.get('/login', handleRequest(authController.getLoginPage));
router.post('/login', handleRequest(authController.postLoginPage));
router.get('/register', handleRequest(authController.getRegisterPage));
router.post('/register', handleRequest(authController.postRegisterPage));

router.get('/cubes/create', isAuthenticated, handleRequest(cubeController.getCreateCube));
router.post('/cubes/create', isAuthenticated, handleRequest(cubeController.postCreateCube));
router.get('/cubes/:cubeId/details', handleRequest(cubeController.getDetails));
router.get('/cubes/:cubeId/attach', handleRequest(cubeController.getAttachAccessory));
router.post('/cubes/:cubeId/attach', handleRequest(cubeController.postAttachAccessory));
router.get('/cubes/:cubeId/edit', isAuthenticated,handleRequest(cubeController.getEditCube));
router.post('/cubes/:cubeId/edit', handleRequest(cubeController.postEditCube));
router.get('/cubes/:cubeId/delete', handleRequest(cubeController.getDeleteCube));
router.post('/cubes/:cubeId/delete', handleRequest(cubeController.postDeleteCube));

router.use('/accessories', accesoryController);


module.exports = router;