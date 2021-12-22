const mongoose = require("mongoose");

function setOptionsStructure(arr) {
  let modifiedOptions = arr.map((option) => {
    return {
      option: option,
      votes: 0,
    };
  });

  return modifiedOptions;
}

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  options: {
    type: Array,
    minlength: 2,
    maxlength: 4,
  },
});

pollSchema.pre("save", function () {
  console.log(this.options);
  this.options = setOptionsStructure(this.options);
});

const Poll = mongoose.model("Poll", pollSchema);

exports.Poll = Poll;
