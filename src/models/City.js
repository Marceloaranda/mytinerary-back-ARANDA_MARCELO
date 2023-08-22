const {Schema, model } = require('mongoose')


const schemaCity = new Schema({
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
})

const City = model("City", schemaCity)

module.exports = City