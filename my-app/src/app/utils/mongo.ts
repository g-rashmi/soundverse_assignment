import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_LOCAL_URI|| "mongodb://localhost:27017/streak")
    .catch((err) => console.log(err))
    .then((con) => console.log("connected to db"));
};

export default dbConnect;