
const express = require('express');
const config = require('./config');
const setupViewEnigne = require('./config/viewEngine');

const app = express();
setupViewEnigne(app);

app.use(express.static('src/public'));
app.get('/', (req, res) => {
    res.send('home page');
});

app.listen(config.PORT, () => console.log(`Server is on port ${config.PORT}`));