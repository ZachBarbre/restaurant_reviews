const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.listen(3333, () => {
    console.log('Server is running on Port 3333');
})

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const rootController = require('./routes/indexRoute');
const restaurantController = require('./routes/restaurantRoute');

app.use('/', rootController);
app.use('/restaurant', restaurantController);

