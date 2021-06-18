const express = require("express")
const router = express.Router()
const answer = require("../controllers/answer")
const { validation } = require("../middlewares/validation")
const { addAnswerSchema } = require("../validation/answer")

router.post("/add-for-step1", validation(addAnswerSchema), answer.addAnswerForStep1)
router.post("/add-for-step2", validation(addAnswerSchema), answer.addAnswerForStep2)

module.exports = router