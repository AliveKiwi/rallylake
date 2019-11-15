const express = require('express');
const { mongoose } = require('./config/database');
const { router } = require('./config/routes');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
