import mongoose from "mongoose";

// const dbConnect = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }
//   mongoose.connect(process.env.DB_URI as string);
// };

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI!);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("There was an error" + error);
  }
};

export default dbConnect;
