import express from 'express';
import dbConnect from './mongo/dbConnect.js';
import router from './routes/index.js'
import  config   from './config.js'

const app = express();
const port = config.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/backend',router)


async function main() {
  try {    
    await dbConnect();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}
await main()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
