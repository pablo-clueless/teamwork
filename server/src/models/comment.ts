import { Schema, model, Types } from "mongoose";


interface Comment {
  createdBy: Types.ObjectId;
  body: string;
  comments?: Types.ObjectId[]
}

const commentSchema = new Schema<Comment>(
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
