const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const FormData = mongoose.model("FormData", formDataSchema);
module.exports = FormData;
