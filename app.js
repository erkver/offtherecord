const express = require('express');
const app = express();


const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
// const uri = "mongodb+srv://ericvere:Turtlejr31@cluster0-ye7pd.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if(err) {
//     console.log('err: ', err);
//   }
//   console.log("connected");
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});