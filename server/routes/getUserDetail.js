const express = require("express");
const router = express.Router();
const { createHash } = require("crypto");
const User = require("../models/usersmodel");

router.post("/", async (req, res) => {
  try {
    const userDetailFromDB = await User.find({});
    const userDetailFromClient = req.body;
    isValid = validateUserInput(userDetailFromDB, userDetailFromClient);
    res.json(isValid);
  } catch (error) {
    console.log({ error });
    res.status(400).json({ error: error.message });
  }
});

function validateUserInput(userDetailFromDB, userDetailFromClient) {
  hashPassword = createHash("sha256")
    .update(userDetailFromClient.password)
    .digest("hex");
  if (
    userDetailFromDB[0].username != userDetailFromClient.username ||
    hashPassword != userDetailFromDB[0].password
  ) {
    return false;
  }
  return true;
}

module.exports = router;
