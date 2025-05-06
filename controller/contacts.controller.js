import Contact from "../models/contact.model.js";
import mongoose from "mongoose";
export const getContact = async (req, res) => {
  // res.send("route working")
  const Contacts = await Contact.find();
  res.render("home", { Contacts });
};

export const getContactPage = async (req, res) => {
  // res.send("route working")
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) return res.render("404", { message: "Invaid id" });

  try {
    const getContactId = await Contact.findById({ _id: req.params.id });
    if (!getContactId) return res.render("404", { message: "Items not found" });
    res.render("show-contact", { getContactId });
  } catch (err) {
    res.render("505", { message: err });
  }
};
export const addContactPage = async (req, res) => {
  res.render("add-contact");
};
export const addContact = async (req, res) => {
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
};

export const updateContactPage = async (req, res) => {
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) return res.render("404", { message: "Invaid id" });

  try {
    const getContactId = await Contact.findById({ _id: req.params.id });
    if (!getContactId) return res.render("404", { message: "Items not found" });

    res.render("update-contact", { getContactId });
  } catch (err) {
    res.render("505", { message: err });
  }
};

export const updateContact = async (req, res) => {
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) return res.render("404", { message: "Invaid id" });
  // res.send(req.body)
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact) return res.render("404", { message: "Items not found" });

    res.redirect("/");
  } catch (err) {
    res.render("505", { message: err });
  }

  // res.render("update-contact");
};

export const deleteContact = async (req, res) => {
  const paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) return res.render("404", { message: "Invaid id" });

  try {
    const contact = await Contact.findOneAndDelete(req.params.id);
    if (!contact) return res.render("404", { message: "Invalid reSouce" });
    res.redirect("/");
  } catch (err) {
    res.render("404", { message: err });
  }
};
