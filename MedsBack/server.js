const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const { populate } = require('./server/model/model');

const medRoute =require('./routes/meds')
const categoryRoute=require('./routes/category')

require('dotenv').config()

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port`,port);
}); 
app.use('/med', medRoute)
app.use('/category', categoryRoute)

mongoose.connect(process.env.DB_URL) 
//mongoose.connect('mongodb://localhost:27017/pharmaxdb',{useNewUrlParser: true, useUnifiedTopology: true}) // 27017 default port for mongo//

const db = mongoose.connection
 
db.on('error',(err) => {
    console.log(err) 
    console.log("Error")
})
 

db.once('open', () => {
    console.log('Database Connection succesfully')
})


