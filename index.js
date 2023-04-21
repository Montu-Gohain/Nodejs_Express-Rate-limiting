const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.get("/home", (req, res) => {
  res.status(200).send({
    success: true,
    msg: "Learning Rate limiting in a node and Express js API",
  });
});

app.get("/products", (req, res) => {
  res.status(200).send({
    success: true,
    data: require("./products"),
  });
});

const PORT = 6060;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:6060`);
});
