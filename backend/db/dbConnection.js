// In your app.js or where your server setup is:
const mongoose = require("mongoose");

// const connectDB = mongoose.connect("mongodb://localhost:27017").then(()=>{
//   console.log("db connected ");
// }).catch((err)=>{
//   console.log(err);
// });
// console.log("Connected to Mongo");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5",
      { dbName: "mydatabase" }
    );
    console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
