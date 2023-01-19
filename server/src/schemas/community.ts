import { Schema, model } from "mongoose";

const communitySchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "event",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const communityModel = model("community", communitySchema);

export default communityModel;
