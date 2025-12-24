import express, { json } from 'express'
import notes from './data/data.js'
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import router from './routes/userRoute.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


const app = express();
dotenv.config();
const PORT = process.env.PORT | 8000;
connectDb();
app.use(express.json());


app.use(cors('http://127.0.0.1:5173'))

app.get('/', (req, res) => {
    res.json('Api is running')
});

app.get('/api/notes', (req, res) => {
    res.send(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find((n) => n._id === id)
    note ? res.json(note) : res.json('invalid id')
})

app.use('/api/user', router)
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log('server is runiing on port 8000'));