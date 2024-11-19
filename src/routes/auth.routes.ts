// src/routes/auth.routes.ts
import { Router } from 'express';
import { loginUser  } from '../controllers/user.controller';
import { registerUser } from '../controllers/auth.controller'
import authenticateJWT from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', registerUser );
router.post('/login', loginUser );
// router.get('/users/:userId', getUser ById);

export default router;



// const express = require('express');
// const { registerUser , loginUser , getUser Profile, updateUser Profile, resetPassword, deleteAccount } = require('../controllers/userController');
// const authenticateJWT = require('../middleware/authMiddleware'); /
// const router = express.Router();

// router.post('/register', registerUser );
// router.post('/login', loginUser );
// router.get('/profile', authenticateJWT, getUser Profile); 
// router.put('/profile', authenticateJWT, updateUser Profile); 
// router.post('/reset-password', authenticateJWT, resetPassword); 
// router.delete('/delete-account', authenticateJWT, deleteAccount); 

// module.exports = router;


// // src/routes/auth.routes.ts
// import { Router } from 'express';
// import { registerUser  } from '../controllers/auth.controller';

// const router = Router();

// router.post('/register', registerUser );


// export default router;
















// import  Router  from 'express'
// const router = Router();
// const authService = new AuthService();

// // import { Router } from 'express';
// // import { registerUser } from '../controllers/auth.controller';

// // const router = Router();
// // router.post('/register', registerUser);

// // export default router;