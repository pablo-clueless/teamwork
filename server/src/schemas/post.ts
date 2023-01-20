import { Schema, model, Types } from "mongoose";


interface Post {
  createdBy: Types.ObjectId,
  image?: string;
  body: string;
  comments: Types.ObjectId[];
   likes?: number;
}

const postSchema = new Schema<Post>(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image: String,
    body: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = model("post", postSchema);

export default postModel;
