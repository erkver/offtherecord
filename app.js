require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

//db instance connection
require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});