const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
//   title: String,
//   body: String
    day: Date,
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;