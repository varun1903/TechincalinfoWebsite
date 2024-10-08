const mongoose = require("mongoose");

const contact = mongoose.Schema({
//   id: String,
  email: String,
  phone: String,
  query: String,
});

module.exports = mongoose.model("queries", contact);