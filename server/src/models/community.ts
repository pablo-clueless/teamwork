import { Schema, model, Types } from "mongoose";


interface Community {
  title: string;
  createdBy: Types.ObjectId;
  members?: Types.ObjectId[];
  events?: Types.ObjectId[]
}

const communitySchema = new Schema<Community>(
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
