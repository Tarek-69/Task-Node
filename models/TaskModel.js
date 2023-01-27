const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const schema = mongoose.Schema;
const TaskSchema = new schema({
  label: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  dateTask: {
    type: Date,
    require: true,
  },

  status: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
