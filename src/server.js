const express = require('express')
const dotenv = require('dotenv')
const noteRoutes = require('./routes/notes-routes')
const errorMiddleware = require('./middlewares/error-middleware')

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/notes', noteRoutes)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})