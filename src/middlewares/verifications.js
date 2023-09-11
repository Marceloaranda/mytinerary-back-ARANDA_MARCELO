const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().min(6).max(20).required().messages({
        'string.email': "Please enter a valid email",
        'String.min': "Email must be al least 6 characters",
        'String.max': "Email must be at most 20 characters",
        'String.empty': "Please enter your email address",
        'String.required': "Please enter your email address"

    }),
    password: Joi.string().alphanum().min(6).max(20).required(),
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    imageUrl: Joi.string().min(3).max(20).required(),
    country: Joi.string().alphanum().min(3).max(20).required(),
});

const userSchemaSin = Joi.object({
    email: Joi.string().email().min(6).max(20).required().messages({
        'string.email': "Please enter a valid email",
        'String.min': "Email must be al least 6 characters",
        'String.max': "Email must be at most 20 characters",
        'String.empty': "Please enter your email address",
        'String.required': "Please enter your email address"

    }),
    password: Joi.string().alphanum().min(6).max(20).required(),
    
});



const verifyAuthData = (req, res, next) => {

    const payload = req.body;
    const userValidated = userSchema.validate(payload, {abortEarly: false});

    if (userValidated.error){
        return res.status(400).json({message: userValidated.error.details.map((err) => err.message)})
    }
    next()
}


const verifyAuthLogin = (req, res, next) => {

    const payload = req.body
    console.log(payload)
    const userValidated = userSchemaSin.validate(payload, {abortEarly: false});

    if (userValidated.error){
        return res.status(400).json({message: userValidated.error.details.map((err) => err.message)})
    }
    next()
}






const verifyDataCity = (req, res, next) => {

    let {city, country, image, description} = req.body
    
    if(city ==""){
        return res.status(400).json({message: "Invalid city"})
    }
    if(country ==""){
        return res.status(400).json({message:" Invalid country"})
    }
    if(image ==""){
        return res.status(400).json({message: "Invalid image"})
    }
    if(description ==""){
        return res.status(400).json({message: "Invalid description"})
    }
    if(!city || !country || !image || !description){
        return res.status(400).json({message: "Invalid data"})
    }
    next()
    }




module.exports =  { verifyDataCity,
                    verifyAuthData,
                    verifyAuthLogin
                }