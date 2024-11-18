// src/controllers/user.controller.ts
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import User, { IUser } from '../models/user.model';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';


export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username }) as IUser | null;
      if (!user) {
        res.status(401).json({ error: true, data:  null,  message: 'Invalid username or password' });
        return
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ error: true, data: null, message: 'Invalid username or password' });
        return
      }
      const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
      res.status(200).json({ error: false, message: 'successful', data: token });
    } catch (error: any) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  };
  

// Other methods...

// export const deleteAccount = async (req: Request

// Additional methods for getUser Profile, updateUser Profile, resetPassword, deleteAccount...




// const bcrypt = require('bcryptjs');
// const users = require('../models/userModel'); // Replace with your database in production
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'your_secret_key'; // Use a strong secret key

// // Existing registerUser  and loginUser  methods...

// // Get User Profile
// exports.getUser Profile = (req, res) => {
//     const { Username } = req.user; // Extracted from JWT
//     const user = users.find(user => user.Username === Username);
    
//     if (!user) {
//         return res.status(404).json({ message: 'User  not found' });
//     }

//     res.json({ Username: user.Username });
// };

// // Update User Profile
// exports.updateUser Profile = async (req, res) => {
//     const { Username } = req.user; // Extracted from JWT
//     const { newUsername, newPassword } = req.body;

//     const user = users.find(user => user.Username === Username);
//     if (!user) {
//         return res.status(404).json({ message: 'User  not found' });
//     }

//     // Update username if provided
//     if (newUsername) {
//         user.Username = newUsername;
//     }

//     // Update password if provided
//     if (newPassword) {
//         user.Password = await bcrypt.hash(newPassword, 10);
//     }

//     res.json({ message: 'User  profile updated successfully' });
// };

// // Reset Password
// exports.resetPassword = async (req, res) => {
//     const { Username } = req.user; // Extracted from JWT
//     const { oldPassword, newPassword } = req.body;

//     const user = users.find(user => user.Username === Username);
//     if (!user) {
//         return res.status(404).json({ message: 'User  not found' });
//     }

//     const isMatch = await bcrypt.compare(oldPassword, user.Password);
//     if (!isMatch) {
//         return res.status(400).json({ message: 'Old password is incorrect' });
//     }

//     user.Password = await bcrypt.hash(newPassword, 10);
//     res.json({ message: 'Password reset successfully' });
// };

// // Delete Account
// exports.deleteAccount = (req, res) => {
//     const { Username } = req.user; // Extracted from JWT
//     const userIndex = users.findIndex(user => user.Username === Username);

//     if (userIndex === -1) {
//         return res.status(404).json({ message: 'User  not found' });
//     }

//     users.splice(userIndex, 1); // Remove user from the array
//     res.json({ message: 'Account deleted successfully' });
// };