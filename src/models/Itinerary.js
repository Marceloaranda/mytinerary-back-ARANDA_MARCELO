const {Schema, model, Types } = require('mongoose')


const schemaItinerary = new Schema({
        title: {
            type: String,
            required: true,
        },
        author: {
            name: {type: String, required: true}, 
            profilePhoto: {type: String, required: true}
        },
        price: {
            type: Number,
            required: true, max:5, min:1
        },
        duration: {
            type: Number,
            required: true, max:8, min:1
        },
        like: {
            type: Number,
            required: true, min:0
        },
        hashTags: [{
            type: String,
            required: true,
        }],
        _city: {type: Types.ObjectId, ref: "City"}



})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary