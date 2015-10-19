import express from 'express';
import CreateComment from './services/create-comment';

let comments = express.Router();

comments.get('/', (req, res) => {
  let comments = [];
  res.json({comments});
});

comments.post('/', (req, res) => {
  new CreateComment.create(req.query.comment).then((comment) => {
    res.json({ comment });
  }, (err) => {
    res.json({
      message: err.message
    });
  });
});

export default comments;
