const express = require("express")
const router = express.Router()
const service = require("../controllers/service")
const { validation } = require("../middlewares/validation")
const { addServiceSchema, getServiceSchema } = require("../validation/service")

router.post("/add", validation(addServiceSchema), service.addService)
router.post("/get", validation(getServiceSchema), service.getSevices)


module.exports = router