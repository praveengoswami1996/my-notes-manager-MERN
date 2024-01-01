import jwt from "jsonwebtoken";

const generateToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET_KEY!, {
        expiresIn: "15d",
    })
}

export default generateToken;