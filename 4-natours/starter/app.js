const express = require('express');
const fs = require('fs');
const app = express();

const tourRouter = require('./routers/tourRoutes.js');
const userRouter = require('./routers/userRoutes.js');

app.use(express.json());
app.use('/api/v2/tours', tourRouter);
app.use('/api/v2/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port  ${port}...`);
});
