import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model'; 
import bcrypt from 'bcryptjs';

// User Registration Controller
export const registerUser  = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            res.status(400).json({ message: 'Username and password are required' });
        }
        const existingUser  = await User.findOne({ username });
        if (existingUser ) {
            res.status(400).json({ message: 'User  already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser  = new User({ username, password: hashedPassword });
        await newUser .save();

        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};





// import { Request, Response, NextFunction } from 'express'

// export const registerUser = () => {
    
// }