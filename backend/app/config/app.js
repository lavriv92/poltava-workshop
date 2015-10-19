import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import environment from './environment.json';

import api from '../apps/api';

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use('/api', api);

export default app;
