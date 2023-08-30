const City = require('../models/City')

const getCities = async (req, res)=> {

    let fields = Object.keys(req.query)
    console.log(fields)
    let query = {}

    for (const field of fields) {
        query[field] = { $regex: "^"+req.query[field], $options: 'i'}
        console.log(query)
    }

    console.log(query)
    try{
        let data = await City.find(query)
            const cities = {
                count: data.length,
                cities: data
            }
        res.status(200).json(
            data
            )
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getCity = async (req, res)=> {
    try{
        let {id} = req.params
        let cityFinded = await City.findById(id)
        res.status(200).json(cityFinded)

    }catch(err){
        res.startus(500).json({message: err.message})
    }
}

const addCity = async (req, res) => {
    try{
        let payload = req.body
        let cityCreated = await City.create(payload)
        
        res.status(201).json({
        "message": "city has been added",
        "city": cityCreated
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteCity = async (req, res) => {
    try{
        let {id} = req.query
        await City.findOneAndDelete({_id: id})
        
        res.status(201).json({
        "message": "city has been deleted",
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateCity = async (req, res) => {
    try{
        let {id} = req.query
        let propsUpDate = req.body
        await City.findOneAndUpdate({_id: id}, {...propsUpDate})
        
        res.status(201).json({
        "message": "city has been updated",
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
    
module.exports = {
    getCities, 
    getCity,
    addCity,
    deleteCity,
    updateCity
}