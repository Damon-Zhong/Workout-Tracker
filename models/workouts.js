const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
//   title: String,
//   body: String
    day: Date,
    totalDuration: {
      type: Number,
      default: 0
      // body: () => {
      //   totalDuration = this.exercises.forEach( excercise => { totalDuration += excercise.duration }) 
      //   return totalDuration
      // }
    },
    exercises: [
      {
        type: { type: String },
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;