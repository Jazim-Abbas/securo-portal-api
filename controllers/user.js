const { User } = require("../db/models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")
const { sendMail, code } = require("../middlewares/sendMail")

exports.profile = promise(async (req, res) => {
    const user = await User.findOne({ email: req.user.email })
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email
    })
})

exports.allUsers = promise(async (req, res) => {
    const users = await User.find({ isAdmin: false })
    if (!users) throw new Exceptions.NotFound("No user found")
    res.status(200).json({ users })

})

exports.register = promise(async (req, res) => {
    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) throw new Exceptions.EmailExist

    const hash = bcrypt.hashSync(req.body.password, 10)
    const newUser = new User({
        ...req.body,
        password: hash,
        verificationCode: code
    })

    const saveUser = await newUser.save()
    await sendMail(req.body.email, res)

    // res.status(200).json({
    //     message: "Successfully register a new user",
    //     user: newUser
    // })
})

exports.verifyUser = promise(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Exceptions.CredentialsNotMatched

    if (req.body.verificationCode == user.verificationCode) {
        await User.updateOne(
            { email: user.email },
            { $set: { isVerified: true } }
        )
    }
    else {
        res.status(400).json({ message: "Incorrect Verification Code" })
    }
})

exports.login = promise(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Exceptions.CredentialsNotMatched

    const matchedPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!matchedPassword) throw new Exceptions.CredentialsNotMatched
    if (user.isVerified == true) {

        const token = await jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        }, process.env.ACCESS_TOKEN_SECRET)

        res.status(200).json({
            token: token,
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(400).json({ message: "Please Verify your account" })

    }
})