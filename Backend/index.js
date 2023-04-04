import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
// import DefaultData from './default.js';
import TempRoutes from './routes/route.js';

const PORT = 8000;

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username,password);



const app = express();
dotenv.config();
app.use(cors());
app.use('/temp', TempRoutes)


app.listen(PORT, () => {
    console.log(`Server is up and running on 8000 ...`);
  });
// DefaultData();
