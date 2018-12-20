require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const { listAllAuthors, createNewAuthor } = require('./controllers/authorController');

//db instance connection
require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//API Endpoints

app
  .route('/authors')
  .get(listAllAuthors)
  .post(createNewAuthor);

  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});