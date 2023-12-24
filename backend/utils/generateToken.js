const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",
    })
}

module.exports = generateToken;