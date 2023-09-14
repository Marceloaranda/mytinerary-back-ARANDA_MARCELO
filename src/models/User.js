const { Schema, model, Types} = require('mongoose')

const schemaUser = new Schema ({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    imageUrl: {type:String, required: true},
    country: {type:String }

})

const User = model("User", schemaUser)

module.exports = User
