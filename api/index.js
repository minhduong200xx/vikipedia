import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect("mongodb+srv://Vikipedia:Nam24082002@vikipedia.xga42v3.mongodb.net/Vikipedia?retryWrites=true&w=majority").then(() =>{
    console.log("Connected to Vikipedia");
})
.catch((err) =>{
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('listening on');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);