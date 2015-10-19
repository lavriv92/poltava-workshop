import express from 'express';

import PostRepository from '../repositories/post-repository';
import PostPresenter from '../presenters/post-presenter';
import PostCreateService from '../services/create-post';

let posts = express.Router();

function getPresentedPost(post) {
  return new PostPresenter(post).toJSON();
}

posts.get('/', (req, res) => {
  let repository = new PostRepository();
  repository.all().then((posts) => {
    posts = getPresentedPost(posts);
    res.json({ posts });
  }, (err) => {
    res.json(err);
  });
});

posts.get('/:id', (req, res) => {
  let repository = new PostRepository();
  repository.get_by_id(req.params.id).then((post) => {
    post = getPresentedPost(post);
    res.json({ post });
  }, (err) => {
    res.json(err);
  });
});

posts.post('/', (req, res) => {
  let createPostService = new PostCreateService().create(req.body.post);
  createPostService.then((post) => {
    post = getPresentedPost(post);
    res.json({post});
  }, (err) => {
    res.json({ message: err.message });
  });
});

export default posts;
