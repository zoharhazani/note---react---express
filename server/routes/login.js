const express = require("express");
const router = express.Router();
const { createHash } = require("crypto");
const User = require("../models/usersmodel");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const userDetailFromDB = await User.find({});
    const userDetailFromClient = req.body;

    // if user input is validate 
    isValid = validateUserInput(userDetailFromDB, userDetailFromClient)
    if (isValid) {
      //create hash for the password 
      userDetailFromClient.password = createHash("sha256").update(userDetailFromClient.password).digest("hex");
      //create the token
      token = generateJWTtoken(userDetailFromClient.username, userDetailFromClient.password);
      res.json({ isValid, token });
    }
    else {
      res.json({ isValid });
    }


  } catch (error) {
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

function generateJWTtoken(username, password) {

  const payload = { username: username, password: password };
  const secretKey = "zohar the queen";
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return token;
}

module.exports = router;
