import mongoose, { Document, Model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

// Define the User document type
interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
  resetCode: {
    data: string;
    expiresAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Define the User model type
interface UserModel extends Model<UserDocument> {}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minLength: 1,
      maxLength: 200,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      index: true,
      lowercase: true,
      unique: true,
      trim: true,
      minLength: 5,
      maxLength: 200,
    },
    password: String,
    role: {
      type: String,
      default: "user",
    },
    image: String,
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
      },
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

export default mongoose.models.User ||
  mongoose.model<UserDocument, UserModel>("User", userSchema);
