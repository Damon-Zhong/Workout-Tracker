const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
//   title: String,
//   body: String
    day: Date,
    exercise: [
      {
        type: String,
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