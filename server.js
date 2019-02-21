const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const routes = require('./routes/routes');
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public')); // send static assets


app.use('/v1', routes);

app.listen(PORT, () => {
    console.log('Server is starting at port ', PORT);
});