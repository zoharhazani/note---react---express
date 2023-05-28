const mongoose = require("../mongooseConnector");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("user", usersSchema);
module.exports = User;
