const express = require("express")
const router = express.Router()
const answer = require("../controllers/answer")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addAnswerSchemaForStep, addAnswerSchemaForSection } = require("../validation/answer")

router.post("/add-for-step1", authentication, answer.addAnswerForStep1)
router.post("/add-for-step2", authentication, answer.addAnswerForStep2)
router.post("/add-for-section", authentication, answer.addAnswerForSection)

module.exports = router