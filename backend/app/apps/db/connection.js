import mongoose from 'mongoose';
import environment from '../../config/environment';


let env = process.env.NODE_ENV || "dev";
let config = environment[env];

let connection = mongoose.createConnection(config.db);

connection.on('connected', (err, db) => {

});

connection.on('error', (err) => {
  
});

export default connection;
