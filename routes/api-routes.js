const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
  res.send("this hit the backend. Woohoo");
});

module.exports = router;
