const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/thoughts");
  console.log("db connected");
}

const thoughtSchema = new mongoose.Schema({
  thought: String,
  name: String,
  userId: String,
  createdTime: String,
  created: String,
  imageUrl: String,
});

const Thought = mongoose.model("Thought", thoughtSchema);

const app = express();
app.use(bodyParser.json());

app.get("/api/thoughts", async (req, res) => {
  const docs = await Thought.find({});
  res.json(docs);
});


app.post("/api/my-thoughts", async (req, res) => {
  // console.log(req.body.userId);
  const docs = await Thought.find({ userId: req.body.userId });
  res.json(docs);
});

app.post("/api/thoughts", async (req, res) => {
  let thought = new Thought();

  thought.userId = req.body.userId;
  thought.name = req.body.name;
  thought.thought = req.body.thought;
  thought.createdTime = req.body.createdTime;
  thought.created = req.body.created;
  thought.imageUrl = req.body.imageUrl;

  const doc = await thought.save();
  // console.log(doc);

  res.json(doc);
});

const server = http.createServer(app);

app.use(express.static("../build"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening to port ${PORT}`));
