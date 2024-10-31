/** @format */

import { IUser } from '@/common/types/IUser';
import mongoose from 'mongoose';


export const UserType = {
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true },
};
const UserSchema = new mongoose.Schema<IUser>(UserType);
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
