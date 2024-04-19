const express = require('express');
const fs = require('fs');
const app = express();

const tourRouter = require('./routers/tourRoutes.js');
const userRouter = require('./routers/userRoutes.js');

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use('/api/v2/tours', tourRouter);
app.use('/api/v2/users', userRouter);

module.exports = app;
