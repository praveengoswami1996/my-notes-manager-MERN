import { Request, Response, NextFunction } from "express";

const authenticateMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.cookies.authToken; //req.cookies.cookieName

    if (!authToken) {
        return res.status(400).json({ success: false, message: "Token is not found" });
    }

    next();
}

export default authenticateMiddleware;