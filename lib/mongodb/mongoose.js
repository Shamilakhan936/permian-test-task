import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
  mongoose.set("bufferCommands", false);
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  console.log("prov", process.env.MONGODB_URL);

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "permian",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
