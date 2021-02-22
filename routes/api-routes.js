const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
  console.log("Hello World");
  res.send({ message: "success" });
});

module.exports = router;
