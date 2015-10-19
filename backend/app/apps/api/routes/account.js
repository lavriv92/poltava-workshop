import express from 'express';
import authentication from '../middlewares/authentication';

import UserService from '../services/user-service';
import userPresenter from '../presenters/user-presenter';

let account = express.Router();

account.post('/create', (req, res) => {
  UserService.create(req.body, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userPresenter(user));
    }
  });
});

export default account;
