const City = require('../models/City');
const Itinerary = require('../models/itinerary');

const addItinerary = async (req,res) => {

    try {
        let { id } = req.query
        let payload = req.body
        let cityFound = await City.findById(id)

        let newItinerary = await Itinerary.create({...payload, _city: cityFound})

        await cityFound.updateOne({ _itineraries: [...cityFound._itineraries, newItinerary] })

        let cityFonundUpdated = await City.findById(id).populate("_itineraries")

        res.status(200).json({
            message: "City has been updated successfully", city: cityFonundUpdated
        })

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const getItineraries = async (req, res) => {
    try {
        let itineraries = await Itinerary.find().populate('_city')
        res.status(200).json({itineraries})
    }catch (err) {
        res.status(500).json({message: err.message})
    }
}

const getItinerary = async (req, res) => {
    try {
        let {id}= req.params
        let itineraryFound =  await Itinerary.findById(id)
        res.status(200).json(
            {
                "message": "Itinerary found",
                "Itinerary": itineraryFound
            }
      )
   } catch (err) {
            res.status(500).json({message: err.message})
   }
}

const getItineraryByCity = async (req, res) =>{
    try {
        let {id}= req.params
        let itineraryFound =  await Itinerary.find({_city:id})
            if(itineraryFound.length == 0){
            return  res.status(400).json(
                   {
                    "message": "itinerary not found",
                   })
            } 
            return res.status(200).json(
               {
                "message": "itinerary found",
                "Itinerary": itineraryFound
               })
    } catch (err) {
             res.status(500).json({message: err.message})
    }
 }

 const deleteItinerary = async (req, res) =>{
    try {
        let {id}= req.query
        let itineraryToDelete =  await Itinerary.deleteOne({_id: id})
        res.status(200).json(
             {
                 "message": "itineray deleted",
                 "city": itineraryToDelete
             }
       )
    } catch (err) {
             res.status(500).json({message: err.message})
    }
 }

 const updateItinerary = async (req, res) =>{
    try {
         let updateData = {
             title: req.body.title,
             authorName: req.body.authorName,
             profilePhoto: req.body.profilePhoto,
             price: req.body.price,
             duration: req.body.duration,
             like: req.body.like,
             hashTags: req.body.hashTags,
         }
         let {id}= req.params 
         let itineraryToUpdate =  await Itinerary.findByIdAndUpdate({_id: id}, updateData)
     
       res.status(200).json(
             {
                 "message": "itinerary updated",
                 "city": itineraryToUpdate
             }
       )
    } catch (err) {
             res.status(500).json({message: err.message})
    }
    
 }


module.exports = {
    addItinerary,
    getItineraries,
    getItinerary,
    getItineraryByCity,
    deleteItinerary,
    updateItinerary
}