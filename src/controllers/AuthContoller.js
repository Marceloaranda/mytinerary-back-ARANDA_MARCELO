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
            res.status(200).json({message: "User created successfully", userCreated})

        }catch(err) {
            res.status(400).json({message: err.message})

    }
}

const login = async (req, res) => {
    try {
        const {password, email} = req.body
        const userFounded = await User.findOne({email: email})
console.log("User found", userFounded)
        if (userFounded) {
            if(verifyPassword(password, userFounded.password)){
               return res.status(200).json({message: "successfully logged in", user: userFounded})

            }else{
               return  res.status(400).json({message: "wrong password"})
            }

        }else{
            res.status(400).json({message: "user not found"})
        }

        
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}



module.exports = {
    register,
    login
} 