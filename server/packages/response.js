
module.exports = {
    E200: function (req, res, value, error) {
        res.status(200).json({
            Status: 'Sucess',
            Context: value,
            Error: error
        })
    },
    E204: function (req, res, value, error) {
        res.status(204).json({
            Status: 'No Content',
            Context: value,
            Error: error
        })
    },
    E400: function (req, res, value, error) {
        res.status(400).json({
            Status: 'Bad Request',
            Context: value,
            Error: error
        })
    },
    E401: function (req, res, value, error) {
        res.status(401).json({
            Status: 'Unauthorized',
            Context: value,
            Error: error
        })
    },
    E404: function (req, res, value, error) {
        res.status(404).json({
            Status: 'Not Found',
            Context: value,
            Error: error
        })
    },
    E500: function (req, res, value, error) {
        res.status(500).json({
            Status: 'Internal Server Error',
            Context: value,
            Error: error
        })
    },
    E520: function (req, res, value, error) {
        res.status(520).json({
            Status: 'Unknown Error',
            Context: value,
            Error: error
        })
    }
}




