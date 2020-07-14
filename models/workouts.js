const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WrokoutSchema = new Schema({
    day: Date,
    totalDuration: { type: Number, default: 22 }, //sum the excercise duration
    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "Excercise"
      }
    ]
  });

const Workout = mongoose.model("Workout", WrokoutSchema);

module.exports = Workout;