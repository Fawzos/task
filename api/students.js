const express = require("express");
const StudentController = require("../controllers/students.controller");
const router = express.Router();

router.post("/", StudentController.create);

module.exports = router;
