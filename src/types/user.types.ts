
// // Base interface for user properties
// export interface IUserBase {
//     username: string; 
//     password: string; 
// }

// // Interface for a user document in the database (Data Transfer Object)
// export interface IUserDTO extends IUserBase {
//     id: string; 
// }

// // Interface for user registration data
// export interface UserRegistration {
//     username: string; 
//     password: string; 
// }

// // Interface for user login data
// export interface UserCredentials {
//     username: string; 
//     password: string; 
// }

// // Optional: Interface for user profile data (if you have additional fields)
// export interface UserProfile {
//     id: string; 
//     username: string; 
// }

// // Optional: Extend the User interface for Mongoose documents
// export interface UserDocument extends IUserBase {
//     _id: string; 
//     createdAt: Date; 
//     updatedAt: Date; 
// }

// src/types/user.types.ts

// Interface for a user document in the database
export interface IUser {
    id?: string; 
    username?: string; 
    password?: string; 
}

// Interface for user registration data
export interface UserRegistration {
    username?: string; 
    password?: string; 
}

// Interface for user login data
export interface UserCredentials {
    username?: string; 
    password?: string; 
}

// Optional: Interface for user profile data (if you have additional fields)
export interface UserProfile {
    id?: string; 
    username?: string; 
}

// Optional: Extend the User interface for Mongoose documents
export interface UserDocument extends IUser {
    _id?: string; 
    createdAt?: Date; 
    updatedAt?: Date; 
}