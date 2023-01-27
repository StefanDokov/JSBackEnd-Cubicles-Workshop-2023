const router = require('express').Router();
const Accessories = require('../models/Accessories');

router.get('/create', (req, res) => {
   res.render('accessories/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl} = req.body;

    await Accessories.create({name, description, imageUrl});

    res.redirect('/');
});


module.exports = router;
