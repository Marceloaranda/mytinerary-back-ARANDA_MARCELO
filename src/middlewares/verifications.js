const verifyDataCity = (req, res, next) => {

    let {city, country, image, description} = req.body
    
    if(city ==""){
        return res.status(400).json({message: "Invalid city"})
    }
    if(country ==""){
        return res.status(400).json({message:" Invalid country"})
    }
    if(image ==""){
        return res.status(400).json({message: "Invalid image"})
    }
    if(description ==""){
        return res.status(400).json({message: "Invalid description"})
    }
    if(!city || !country || !image || !description){
        return res.status(400).json({message: "Invalid data"})
    }
    next()
    }


module.exports =  { verifyDataCity }