const { connect } = require('mongoose');
require('dotenv/config')

const URI = process.env.DATABASE_URI

    connect(URI)
        .then(()=> {
            console.log("Connect success to database")
        })
        .catch(()=> {
            console.log("Error connecting to database" + err)
        }) 



