const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Contact = require("./models/contact.model");
mongoose.connect("mongodb://localhost:27017/contact-crud").then(() => {
  console.log("mongodb is connected successfuly");
});
const app = express();

app.listen(4000, () => {
  console.log("app is running");
});

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); // emanle to accept data using form
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", async (req, res) => {
  // res.send("route working")
  const Contacts = await Contact.find();
  res.render("home", { Contacts });
});

app.get("/show-contact/:id", async (req, res) => {
  // res.send("route working")
  const getContactId = await Contact.findById({ _id: req.params.id });
  res.render("show-contact", { getContactId });
});
app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});
app.post("/add-contact", async (req, res) => {
  try {
    console.log("<== req,body ==>", req.body);
    const { first_name, last_name, email, phone, address } = req.body;
    const newContact = new Contact({
      first_name,
      last_name,
      email,
      phone,
      address,
    });

    await newContact.save();
    res.redirect("/");

    // res.status(200).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messg: "Server error" });
  }
});
app.get("/update-contact/:id", async (req, res) => {
  const getContactId = await Contact.findById({ _id: req.params.id });
  res.render("update-contact", { getContactId });
});

app.post("/update-contact/:id", async (req, res) => {
  // res.send(req.body)
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
  // res.render("update-contact");
});
app.get("/delete-contact/:id", async(req, res) => {
  await Contact.findOneAndDelete(req.params.id);
  res.redirect("/");
});
