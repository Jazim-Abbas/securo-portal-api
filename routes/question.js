const express = require("express")
const router = express.Router()
const question = require("../controllers/question")
const { validation } = require("../middlewares/validation")

router.post("/add", question.addQuestion)

module.exports = router
