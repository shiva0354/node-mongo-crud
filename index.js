import express from "express"
import { config } from "./src/config/config.js"
import router from "./src/routes/api.js"
import { connection } from "./src/database/connection.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.use(router)

connection()

app.listen(config.port, () => { console.log(`Server Running On Port: ${config.port}`) })
