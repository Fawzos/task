const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { body } = req;

  res
    .json({
      ...body,
    })
    .status(200);
});

module.exports = router;
