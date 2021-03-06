const express = require("express")
const router = express.Router()
const user = require("../controllers/user")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { registerSchema, loginSchema, verifySchema } = require("../validation/user")

router.get("/profile", authentication, user.profile)
router.get("/all", authentication, user.allUsers)
router.post("/verify", validation(verifySchema), user.verifyUser)
router.post("/register", validation(registerSchema), user.register)
router.post("/login", validation(loginSchema), user.login)

module.exports = router