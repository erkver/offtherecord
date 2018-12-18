const mongoose = require('mongoose');

// replace the uri string with your connection string.
const uri = "mongodb+srv://ericvere:Turtlejr31@cluster0-ye7pd.mongodb.net/test?retryWrites=true";
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true
};

mongoose.connect(uri, options).then(
  () => {
    console.log('Database connected...');
  },
  err => {
    console.log("Error connecting...", err);
  }
);

require('../models/Authors');
