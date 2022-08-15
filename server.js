require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

app.use(express.urlencoded({ extended: true }));

const books = require("./controllers/books.js");
app.use("/books", books);

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(process.env.PORT)