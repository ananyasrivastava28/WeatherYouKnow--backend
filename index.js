const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

const connectToDb = require('./connection');

const weatherRoute = require('./routes/weather');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//dbConnection
connectToDb('mongodb://localhost:27017/weatherApp').then(()=>{
    console.log('connected to db');
}).catch((error)=>{
    console.log('error: ', error);
})

//routesAPI
app.use('/user/', weatherRoute);


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})