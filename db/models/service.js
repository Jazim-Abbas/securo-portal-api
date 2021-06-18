const mongoose = require("mongoose")
const schema = mongoose.Schema

const serviceSchema = new schema({
    serviceTitle: {
        type: String,
        require: true
    },
    stepId: {
        type: schema.Types.ObjectId,
        ref: "Step",
        require: true
    }
})

exports.Service = mongoose.model("Service", serviceSchema)