const express = require('express')
const { register, login } = require('../controllers/AuthContoller')
const { verifyAuthData, verifyAuthLogin } = require('../middlewares/verifications')
const { hashPassword } = require('../middlewares/auth')

const authRouter = express.Router()

authRouter.post('/register', verifyAuthData, hashPassword, register)
authRouter.post('/login', verifyAuthLogin, login)



module.exports = authRouter