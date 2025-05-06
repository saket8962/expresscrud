import mongoose from "mongoose";

const ConnetdbUrl = () => {
  mongoose.connect("mongodb://localhost:27017/contact-crud").then(() => {
    console.log("mongodb is connected successfully");
  });
};
export default ConnetdbUrl