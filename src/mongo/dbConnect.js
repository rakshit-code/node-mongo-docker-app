import mongoose from 'mongoose';

import  config   from '../config.js'

export default async function dbConnect() {
  try {
    await mongoose.connect(config.MONGO_CONN_STRING, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
}
