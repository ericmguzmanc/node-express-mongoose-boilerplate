let mongoose = require('mongoose');

const SERVER = '';
const DATABASE = '';
const USER = '';
const PASSWORD = '';
const dbURI = `mongodb://${USER}:${PASSWORD}@${SERVER}/${DATABASE}`;
/**
 *  🔋 Database connection
 */
mongoose.connect(dbURI);

/**
 * 🏆 When successfully connected
 */
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + dbURI);
});

/**
 * ⚠ If the connection throws an error
 */
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ', err);
});

/**
 * 👋🏻 If the connection is disconnected
 */
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

