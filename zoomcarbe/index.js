import express from 'express';
import { connectDB } from './db.js';

const app = express();
const port = 3000;

app.listen(port, () => console.log("Server started at port 3000"));
await connectDB();