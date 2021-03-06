'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//cargar rutas
const user_routes = require('./routes/user');
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//rutas
app.use('/api', user_routes);

//exports
module.exports = app;