const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();

//logging all the route calls
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true  });



//Listen to PORT
app.listen( PORT, function(){
    console.log( `Server listening on port:${PORT}...` )
})