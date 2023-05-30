const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    console.log({ token });
    const secretKey = "zohar the queen";
    if (!token) {
        return res.forbidden({ message: 'A token is required for authentication' });
    }
    try {
        jwt.verify(token, secretKey);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
    return next();
};

module.exports = verifyToken;
