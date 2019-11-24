const express = require('express');
const { mongoose } = require('./server/config/database');
const { router } = require('./server/config/routes');
const uploadLocation = require('./client/src/uploads/uploadsLocation');
const cors = require('cors');

const app = express();
const port = 5000;
console.log(uploadLocation);
app.use(cors());
app.use(express.json());
app.use(express.static(`${uploadLocation}`));
app.use('/', router);
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
