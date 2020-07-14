const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WrokoutSchema = new Schema({
//   title: String,
//   body: String
});

const Workout = mongoose.model("Workout", WrokoutSchema);

module.exports = Workout;