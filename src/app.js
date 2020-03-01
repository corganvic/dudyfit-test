const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const Routes = require('./routes/routes');
const environments = require('./config/config');
const cors = require('cors');

const app = express();
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

//Setings
app.disable('x-powered-by');
app.use(cors());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded)

//Environments
app.set('port', environments.PORT || 3000);


//Middlewares
app.use(morgan('dev'));

//Routes
app.use('/', Routes);

let server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
