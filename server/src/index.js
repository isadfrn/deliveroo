require("dotenv").config();

const express = require("express");
const nodeBanner = require("node-banner");
const cors = require("cors");
const port = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express());

app.listen(port, async () => {
  await nodeBanner(
    "deliveroo-server",
    `Server is running on: http://localhost:${port}`,
    "green",
    "green"
  );
});
