import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { isEmail } from "validator";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

const UserSchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "invalid email"],
  },
});

const User = mongoose.model("User", UserSchema);

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.post("/signup", async (req, res) => {
  const { useremail } = req.body;
  try {
    const newUser = await new User({
      useremail: useremail,
    }).save();
    res.status(201).json({
      response: {
        useremail: newUser.useremail,
        userId: newUser._id,
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
