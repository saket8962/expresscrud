import mongoose from "mongoose";

const ConnetdbUrl = () => {
  mongoose.connect(
    "mongodb+srv://saketn645:1%402%403%404%405%406%21%21@cluster0.qiox8so.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  ).then(() => {
    console.log("mongodb is connected successfully");
  }).catch((err) => {
    console.error("MongoDB connection error:", err);
  });
};

export default ConnetdbUrl;
