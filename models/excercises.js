const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
//   title: String,
//   body: String
    day: Date,
    totalDuration: Number,
    exercise: [
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

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;