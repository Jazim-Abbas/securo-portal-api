const mongoose = require("mongoose")
const schema = mongoose.Schema

const stepSchema = new schema({
    name: {
        type: String,
        require: true
    }
})

exports.Step = mongoose.model("Step", stepSchema)