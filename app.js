require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const port = process.env.PORT || 3001;
const { listAllAuthors, createNewAuthor } = require('./controllers/authorController');
const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost",
  disableHostCheck: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

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

  
server.listen(5000, "localhost", () => {
  console.log(`Webpack running at http://localhost:5000`);
});

app.listen(port, () => {
  console.log(`Server/database running at http://localhost:${port}`);

})