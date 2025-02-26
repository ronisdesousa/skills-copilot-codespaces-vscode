// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const comments = require('./comments');
const port = 4001;

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// Add a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  const addedComment = comments.addComment(newComment);
  res.status(201).send(addedComment);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});