import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { isEmail } from "validator";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

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

app.get("/", (req, res) => {
  res.send("Endpoints for hairbook");
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
