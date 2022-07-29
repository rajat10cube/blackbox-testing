const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.use("/", express.static(path.resolve(__dirname, ".")));

module.exports = app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
