const mongoose = require("mongoose")
const schema = mongoose.Schema

const sectionSchema = new schema({
    sectionTitle: {
        type: String,
        require: true
    },
    serviceId: {
        type: schema.Types.ObjectId,
        ref: "Service",
        require: true
    }
})

exports.Section = mongoose.model("Section", sectionSchema)