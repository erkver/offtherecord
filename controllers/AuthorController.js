const Author = require('../models/Authors');

exports.listAllAuthors = (req, res) => {
  Author.find({}, (err, author) => {
    if(err) {
      res.status(500).send("Author find error", err);
    }
    res.status(200).json(author);
  })
}