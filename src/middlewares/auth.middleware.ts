// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return next(new Error('No token, authorization denied')); 
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    req.user = decoded.userId;
    next(); 
  } catch (error) {
    return next(new Error('Token is not valid')); 
  }
};

export default authMiddleware;






// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'your_secret_key'; // Use the same secret key

// const authenticateJWT = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>

//     if (!token) {
//         return res.sendStatus(403); // Forbidden
//     }

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) {
//             return res.sendStatus(403); // Forbidden
//         }
//         req.user = user; // Attach user info to request
//         next();
//     });
// };

// module.exports = authenticateJWT;