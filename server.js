const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();

//logging all the route calls
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true  });

// [GET] fetch workout data from database
app.get("/api/workouts", async ( req, res ) => {
    let workouts
    workouts = await db.Workout.find({})
    res.send( workouts )
})

// [PUT] addExercise to workout
app.put("/api/workouts/:id", async ( req, res ) => {

})

// [POST] createWorkout
app.post("/api/workouts", async ( req, res ) => {

})

// [GET] workout range
app.get("/api/workouts/range", async ( req, res ) => {

})

//Listen to PORT
app.listen( PORT, function(){
    console.log( `Server listening on port:${PORT}...` )
})