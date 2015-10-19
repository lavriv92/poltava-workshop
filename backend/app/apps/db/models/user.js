import mongoose from 'mongoose';
import connection from '../connection';

import cryptPassword from '../utils/crypt-password';

let userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, set: cryptPassword },
  firstName: { type: String },
  lastName: { type: String },
  token: { type: String },
  created: { type: Date, default: new Date() }
});

userSchema.methods.authenticate = (password) => {
  return this.password === cryptPassword(password);
};

export default connection.model('User', userSchema);
