const Author = require('../models/Authors');

exports.listAllAuthors = (req, res) => {
  Author.find({}, (err, author) => {
    if(err) {
      res.status(500).send("Author find error", err);
    }
    res.status(200).json(author);
  })
}

exports.createNewAuthor = (req, res) => {
  // const { authorName, authorEmail } = req.body;
  let newAuthor = new Author(req.body);
  console.log('req.body: ', req.body);
  newAuthor.save((err, author) => {
    if(err) {
      res.status(500).send("Create author error", err);
    }
    console.log(author);
    res.status(200).json(author);
  });
}

