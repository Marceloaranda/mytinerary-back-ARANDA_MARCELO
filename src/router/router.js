const express = require('express')
const router = express.Router()
const {getCities, getCity, addCity, deleteCity,updateCity} = require('../controllers/cityController')
const {verifyDataCity } = require('../middlewares/verifications')
const { addItinerary } = require('../controllers/itineraryController')

router.get("/city", getCities)
router.get("/city/:id", getCity)
router.post("/city", verifyDataCity, addCity)
router.delete("/city", verifyDataCity, deleteCity)
router.put("/city", updateCity)


router.post("/itineraries",addItinerary)









module.exports = router