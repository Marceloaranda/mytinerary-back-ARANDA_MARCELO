const express = require('express')
const { register, login, authenticated } = require('../controllers/AuthContoller')
const { verifyAuthData, verifyAuthLogin } = require('../middlewares/verifications')
const { hashPassword, verifyUserExists, verifyPassword, generateToken, passportVerificator } = require('../middlewares/auth')

const authRouter = express.Router()

authRouter.post('/register', verifyAuthData, hashPassword, generateToken, register)
authRouter.post('/login', verifyAuthLogin, verifyUserExists, verifyPassword, generateToken, login)
authRouter.post('/authenticated', passportVerificator.authenticate("jwt", {session: false}), generateToken, authenticated)



module.exports = authRouter