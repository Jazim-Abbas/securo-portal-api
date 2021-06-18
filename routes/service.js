const express = require("express")
const router = express.Router()
const service = require("../controllers/service")
const { validation } = require("../middlewares/validation")

router.post("/add", service.addService)

module.exports = router