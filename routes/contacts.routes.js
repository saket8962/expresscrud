import express from "express";
import { addContact, addContactPage, deleteContact, getContact, getContactPage, updateContact, updateContactPage } from "../controller/contacts.controller.js";

const router = express.Router();
// Route
router.get("/", getContact);

router.get("/show-contact/:id", getContactPage);
router.get("/add-contact", addContactPage);
router.post("/add-contact", addContact);
router.get("/update-contact/:id", updateContactPage);
router.post("/update-contact/:id", updateContact);
router.get("/delete-contact/:id", deleteContact);

export default router;
