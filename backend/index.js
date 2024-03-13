const express = require("express");
const app = express();
const PORT = 8000;
const connectDB = require("./db/dbConnection");
const User = require("./db/User");
const cors = require("cors");
const { signupRoute } = require("./routes/userRoutes");

// Enable CORS for all routes
app.use(cors());
// middleware for parsing JSON
app.use(express.json());

connectDB();

// Routes
app.post(signupRoute, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res
      .status(201)
      .json({ success: true, message: "Registration successfull" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
