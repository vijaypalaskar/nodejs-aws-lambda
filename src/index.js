if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/hello", (req, res) => {
  return res.json({ message: "hello from hello api" });
});

app.get('/', (req, res) => {
    return res.json({ message: "hello from home api" });
});

if (process.env.NODE_ENV === "development") {
  (async () => {
    app.listen(PORT, () => {
      console.log(`server listening on PORT: ${PORT}`);
    });
  })();
} else {
  module.exports.handler = serverless(app);
}
