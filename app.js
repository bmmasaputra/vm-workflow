import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true
}));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1 style='font-family: sans-serif; margin: 50px; font-weight: 400'>Hi Fitizen! Welcome to VM Workflow</h1>");
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});