import dotenv from "dotenv"
dotenv.config()
export const config = {
    port: process.env.APP_PORT || 3000,
    mongo_url: process.env.MONGO_URL || ''
}