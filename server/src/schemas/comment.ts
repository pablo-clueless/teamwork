import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

const commentModel = model("comment", commentSchema);

export default commentModel;
