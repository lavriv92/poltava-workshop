import mongoose from 'mongoose';
import connection from '../connection';

let commentSchema = new mongoose.Schema({
  post: { type: String, ref: 'Post' },
  author: { type: String },
  content: { type: String },
  created: { type: Date, default: new Date() }
});

export default connection.model('Comment', commentSchema);
