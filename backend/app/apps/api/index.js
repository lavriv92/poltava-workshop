import express from 'express';

import account from './routes/account';
import posts from './routes/posts';
import comments from './routes/comments';

let api = express.Router();

api.use('/account', account);
api.use('/posts', posts);
api.use('/comments', comments);


export default api;
