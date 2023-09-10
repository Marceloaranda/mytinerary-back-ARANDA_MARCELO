const bcrypt = require('bcrypt')


const hashPassword = (req, res, next) => {
    try {
        const passWordPlain =  req.body.password
        const hashPassword = bcrypt.hashSync(passWordPlain, 10)

        req.body.password = hashPassword
        next()


    } catch (error) {
        res.status(500).json({ error: error })
    }

}

const verifyPassword = (paswordPlain, hashPassword) => {

    const isValid = bcrypt.compareSync(paswordPlain , hashPassword)
    return isValid
}


module.exports = {hashPassword,
                verifyPassword
            }