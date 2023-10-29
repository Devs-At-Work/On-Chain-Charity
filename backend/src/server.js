import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth.js';
import router from './router.js';
import { createNewUser, sigin } from './handlers/user.js';

const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hello World");
    res.status(200)
    res.json({
        message: "Hello World"
    })
});

app.use('/api', protect, router);
app.use('/user', createNewUser);
app.use('/signin', sigin);

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' })
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'bad request' })
    } else {
        res.status(500).json({ message: 'internal server error' })
    }
})

export default app;