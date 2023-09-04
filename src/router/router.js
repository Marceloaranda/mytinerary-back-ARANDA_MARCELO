const express = require('express')
const router = express.Router()
const {getCities, getCity, addCity, deleteCity,updateCity} = require('../controllers/cityController')
const {verifyDataCity } = require('../middlewares/verifications')
const { addItinerary, getItineraries, getItinerary, getItineraryByCity, deleteItinerary, updateItinerary } = require('../controllers/itineraryController')

router.get("/city", getCities)
router.get("/city/:id", getCity)
router.post("/city", verifyDataCity, addCity)
router.delete("/city", verifyDataCity, deleteCity)
router.put("/city", updateCity)


router.post("/itineraries",addItinerary)
router.get("/itineraries",getItineraries)
router.get("/itinerary/:id", getItinerary)
router.get("/itineraries/:id", getItineraryByCity)
router.delete("/itinerary/:id", deleteItinerary)
router.put("/itinerary/:id", updateItinerary)



module.exports = router