/** @format */

import { ICall } from '@/common/types/ICall';
import mongoose from 'mongoose';


export const CallType = {
	phone: { type: String, required: true },
	date: { type: Date, required: true },
	additionalInformation: { type: String },
};
const CallSchema = new mongoose.Schema<ICall>(CallType);
const Call = mongoose.models.Call || mongoose.model<ICall>('Call', CallSchema);
export default Call;
