const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnect } = require("./dBModel/db");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");
const assignMentortoStudent = require("./routes/assignMentortoStudent");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
app.use("/assignmentor", assignMentortoStudent);

const PORT = process.env.PORT || 5000

app.listen(PORT, async (err) => {
  await dbConnect();
  console.log("Started server on", PORT);
  if (err) {
    console.log(err, "error in starting server");
  }
});
