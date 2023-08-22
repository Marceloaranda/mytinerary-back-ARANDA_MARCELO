const City = require('../models/City')

const getCities = async (req, res)=> {
    try{
        let cities = await City.find()
        res.status(200).json(
            cities
            )
    }catch(err){
        res.status(500).json({message: err})
    }
}

const getCity = async (req, res)=> {
    try{
        let {id} = req.params
        let cityFinded = await City.findById(id)
        res.status(200).json(cityFinded)

    }catch(err){
        res.startus(500).json({message: err})
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
        res.status(500).json({message: err})
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
        res.status(500).json({message: err})
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
        res.status(500).json({message: err})
    }
}
    
module.exports = {
    getCities, 
    getCity,
    addCity,
    deleteCity,
    updateCity
}