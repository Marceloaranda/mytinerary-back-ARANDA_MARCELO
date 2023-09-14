const { verifyPassword } = require('../middlewares/auth')
const User = require('../models/User')

const register = async (req, res) => {

    try {
        const payload = req.body
        const userExists = await User.findOne({email: payload.email})

            if (userExists) {
               return res.status(403).json({message: "User already exists"})
            }
            const userCreated = await User.create(payload)
            console.log("User created")
            res.status(200).json({
                success: true,
                message: "User created successfully", token: req.token, user: {
                email: userCreated.email,
                _id: userCreated._id
            }})

        }catch(err) {
            res.status(400).json({message: err.message})

    }
}

const login = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "successfully logged in", 
            token: req.token, 
            user: {
                email: req.user.email,
                _id: req.user._id

            }})

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const authenticated = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "successfully authenticated", 
            token: req.token, 
            user: {
                email: req.user.email,
                _id: req.user._id

            }})

    } catch (error) {
        res.status(400).json({message: error.message});
    }

}



module.exports = {
    register,
    login,
    authenticated
} 