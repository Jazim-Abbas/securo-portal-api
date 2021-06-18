const express = require("express")
const router = express.Router()
const answer = require("../controllers/answer")
const { validation } = require("../middlewares/validation")
// const {  } = require("../validation/")

router.post("/add-for-step1", answer.addAnswerForStep1)
router.post("/add-for-step2", answer.addAnswerForStep2)

module.exports = router