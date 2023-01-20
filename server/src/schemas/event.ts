import { Schema, model, Types } from "mongoose";

interface Event {
  title: string;
  createdBy: Types.ObjectId;
  endsOn: Date;
}

const eventSchema = new Schema<Event>(
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
