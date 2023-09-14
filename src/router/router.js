const express = require('express')
const router = express.Router()
const {getCities, getCity, addCity, deleteCity,updateCity} = require('../controllers/cityController')
const {verifyDataCity } = require('../middlewares/verifications')
const { addItinerary, getItineraries, getItinerary, getItineraryByCity, deleteItinerary, updateItinerary } = require('../controllers/itineraryController')
const authRouter = require('./auth')
const { passportVerificator } = require('../middlewares/auth')

router.get("/city", getCities)
router.get("/city/:id", getCity)
router.post("/city",passportVerificator.authenticate("jwt", {session: false}), verifyDataCity, addCity)
router.delete("/city",passportVerificator.authenticate("jwt", {session: false}), verifyDataCity, deleteCity)
router.put("/city",passportVerificator.authenticate("jwt", {session: false}), updateCity)


router.post("/itineraries",passportVerificator.authenticate("jwt", {session: false}),addItinerary)
router.get("/itineraries",getItineraries)
router.get("/itinerary/:id", getItinerary)
router.get("/itineraries/:id", getItineraryByCity)
router.delete("/itinerary/:id",passportVerificator.authenticate("jwt", {session: false}), deleteItinerary)
router.put("/itinerary/:id",passportVerificator.authenticate("jwt", {session: false}), updateItinerary)

router.use("/user", authRouter)

module.exports = router