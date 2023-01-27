
const express = require('express');
const config = require('./config');
const routes = require('./routes');
const setupViewEnigne = require('./config/viewEngine');
const initDatabase = require('./config/dataBaseInit');

const app = express();
setupViewEnigne(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is on port ${config.PORT}...`)))
    .catch((err) => console.log(err.message));
