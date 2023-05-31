const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    const secretKey = "zohar the queen";
    if (!token) {
        return res.forbidden({ message: 'A token is required for authentication' });
    }
    try {
        jwt.verify(token, secretKey);
        return next();
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = verifyToken;
