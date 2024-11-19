// import mongoose, { Document, Schema } from 'mongoose';

// // Base interface for user properties
// export interface IUserBase {
//     username: string; 
//     password: string; 
// }

// // Interface for a user document in the database
// export interface IUser extends IUserBase, Document {
//     createdAt?: Date; 
//     updatedAt?: Date; 
// }

// const UserSchema = new Schema<IUser >({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// }, { timestamps: true });

// export default mongoose.model<IUser >('User ', UserSchema);

// src/models/user.model.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string; 
    password: string; 
    createdAt?: Date; 
    updatedAt?: Date; 
}

const UserSchema = new Schema<IUser >({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IUser >('User ', UserSchema); // Removed space