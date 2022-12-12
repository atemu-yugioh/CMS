import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: boolean;
  user_agent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    user_agent: { type: String },
  },
  { timestamps: true }
);

const Session = mongoose.model<SessionDocument>("Session", SessionSchema);

export default Session;
