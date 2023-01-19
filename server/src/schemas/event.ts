import { Schema, model } from "mongoose";

const eventSchema = new Schema(
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
    endsOn: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const eventModel = model("event", eventSchema);

export default eventModel;
