const express = require("express");
const router = express.Router();

router.get("/testing", (req, res) => {
  res.send("hi Kontrol from devices.js");
});


module.exports = router;