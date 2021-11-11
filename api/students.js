const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { body } = req;

  console.log("req :: ", req.body);

  res
    .json({
      success: true,
      ...body,
    })
    .status(200);
});

module.exports = router;
