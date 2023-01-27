const router = require('express').Router();
const Accessories = require('../models/Accessories');

router.get('/create', (req, res) => {
   res.render('accessories/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl} = req.body;
   try{
    await Accessories.create({name, description, imageUrl});
   } 
   catch(err) {
    console.log(err.message);
    return res.redirect('/404');
   }
    res.redirect('/');
});


module.exports = router;
