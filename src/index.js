
const express = require('express');
const config = require('./config');
const routes = require('./routes');
const setupViewEnigne = require('./config/viewEngine');

const app = express();
setupViewEnigne(app);

app.use(express.static('src/public'));
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is on port ${config.PORT}`));