import { Schema, model, Types } from "mongoose";


interface User  {
  email: string;
  name: string;
  password: string;
  username: string;
  events?: Types.ObjectId[];
  followers?: Types.ObjectId[];
  following?: Types.ObjectId[];
  posts?: Types.ObjectId[];
  isVerified?: boolean;
}

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "event",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("user", userSchema);

export default userModel;
