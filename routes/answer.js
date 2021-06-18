const express = require("express")
const router = express.Router()
const answer = require("../controllers/answer")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addAnswerSchema } = require("../validation/answer")

router.post("/add-for-step1", authentication, validation(addAnswerSchema), answer.addAnswerForStep1)
router.post("/add-for-step2", authentication, validation(addAnswerSchema), answer.addAnswerForStep2)

module.exports = router