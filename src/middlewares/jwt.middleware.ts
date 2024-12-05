import {Request, Response, NextFunction} from "express";
import  jwt  from "jsonwebtoken";


export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
    // console.log("Alerta, pasó por aquí")
    
    // -se usa next() si queremos que tal usuario pueda seguir
    // next();

    // -O se usar error para evitar que siga:
    // res.status(401).json({ error: "no autorizado"});

    const authHeader = req.headers.authorization; // "Bearer token..."
    if (!authHeader) {
        res.status(401).json({ error: "No Bearer Header"});
        return
    }

    const token = authHeader.split(" ")[1]
    try {
        const payload =jwt.verify(token, "secret");
        console.log(payload);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Token invalid"});
    }
};