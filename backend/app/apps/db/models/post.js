import mongoose from 'mongoose';
import connection from '../connection';

let postSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  created: { type: Date, default: new Date() }
});

export default connection.model('Post', postSchema);
