InternalServerError = (error, res) => {
    res.status(500).json({
        Status: "Error",
        Context: error.message
    })
}

BadRequest = (error, res) => {
    res.status(400).json({
        Status: "Error",
        Context: error.message
    })
}

Unauthorized = (error, res) => {
    res.status(401).json({
        Status: "Error",
        Context: error.message
    })
}


module.exports = {
    catch_error: (error, res) => {
        switch(error.type) {
            case "InternalServerError":
        InternalServerError(error, res)
            break
            case "BadRequest":
            BadRequest(error, res)
            break
            case "Unauthorized":
            Unauthorized(error, res)
            break
        }
    }
}
  
