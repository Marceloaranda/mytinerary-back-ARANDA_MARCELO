const City = require('../models/City');
const Itinerary = require('../models/itinerary');

const addItinerary = async (req,res) => {

    try {
        let { id } = req.query
        let payload = req.body
        let cityFound = await City.findById(id)
        let newItinerary = await Itinerary.create(payload)
        await cityFound.updateOne({ itineraries: [...cityFound.itineraries, newItinerary] })
        let cityFonundUpdated = await City.findById(id)

        res.status(200).json({
            message: "City has been updated successfully", city: cityFonundUpdated
        })

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}
module.exports = {
    addItinerary
}