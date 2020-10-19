let http = require('http');
let path = require('path');

let express = require('express');
let cookieParser = require('cookie-parser');

let app = express();

let server = http.createServer(app);

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

let Env = require('./env');
let env = new Env(app);

let helper = require('./html/helper');
helper.environment.setEnv(env);

function boot() {
  env.setServer(server);
}


let session = require('./session');
app.use(session);

let routes = require('./routes');
app.use('/', routes);

module.exports = { app, server, boot };
