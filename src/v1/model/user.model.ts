import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config/config";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "email exist"],
    },
    name: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  // only hash password if it changed or is new
  if (!user.isModified("password")) return next();

  // hash password
  const salt: string = await bcrypt.genSalt(config.salt);

  const hash: string = await bcrypt.hash(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

// * Used for login
UserSchema.methods.comparePassword = async function (password: string) {
  const user = this as UserDocument;

  return bcrypt.compare(password, user.password).catch((e) => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
