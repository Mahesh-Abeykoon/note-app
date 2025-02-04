const errorMiddleware = (err, req, res, next) => {
    console.error(err)
    res.status(500).json({ status: 500, message: err.message || 'Internal Server Error' })
}

module.exports = errorMiddleware