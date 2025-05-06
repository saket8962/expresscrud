import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ContactRouter from "./routes/contacts.routes.js";
import ConnetdbUrl from "./config/database.js"
// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB

ConnetdbUrl()
const app = express();

// Server setup
app.listen(4000, () => {
  console.log("App is running on http://localhost:4000");
});

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use( ContactRouter);
