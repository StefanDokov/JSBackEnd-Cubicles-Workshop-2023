
const express = require('express');
const config = require('./config');
const app = express();

app.get('/', (req, res) => {
    res.sendStatus('home page');
});

app.listen(config.PORT, () => console.log(`Server is on port ${config.PORT}`));