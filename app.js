require('dotenv').config();
const express=require('express');
const connectToDB=require('./config/db.js')
const cors=require('cors')
const app=express();


//express middleware//the request it executed before sending
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//init connection
connectToDB();

const userroutes=require('./routes/router.js')
app.use('/',userroutes)


module.exports=app;