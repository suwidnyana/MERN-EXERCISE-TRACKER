// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv'
// import exerciseRouter from './routes/exercises.js';
// import userRouter from './routes/users.js';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')
dotenv.config()

require("./services/cache")()





const app = express();
app.use(express.json());


app.use(cors());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open',  () => {
    console.log("MongoDB database koneksi berhasil");
})


// app.use('/olahraga', exerciseRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server berjalan di port: ${port}`);
})

