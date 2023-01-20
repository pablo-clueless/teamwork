import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://root:rootpassword@mongodb_container");

mongoose.connection
  .once("open", () => {
    console.log("MongoDB Connected 🚀");
  })
  .on("error", (error) => {
    console.log(error);
  });
