import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth.js';
import router from './router.js';
import { createNewUser, sigin } from './handlers/user.js';
import session from 'express-session';
import { check } from 'express-validator';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send("Hello World");
    res.status(200)
    res.json({
        message: "Hello World"
    })
});

app.use('/api', protect, router);

app.use('/user', [
    check('username').isLength({ min: 4 }),
    check('email').isEmail(),
    check('password').isLength({ min: 8 })
], createNewUser);

app.use('/signin',
    sigin);

app.get('/protected-route', protect, (req, res) => {
    res.json({ message: 'This route is protected.' });
});

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' })
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'bad request' })
    } else {
        res.status(500).json({ message: 'internal server error' })
    }
})

app.get('/protected-route', protect, (req, res) => {
    res.json({ message: 'This route is protected.' });
});

export default app;