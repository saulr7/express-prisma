const express = require('express');
const routeEmploye = require('./routes/employeRoutes');

const app = express();

app.use(express.json());

app.use('/employe', routeEmploye);

module.exports = app;
