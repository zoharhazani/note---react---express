const jwt = require("jsonwebtoken");
function generateJWTtoken(username, password) {

    const payload = { username: username, password: password };
    const secretKey = "zohar the queen";
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    return token;
}
module.exports = generateJWTtoken;