import bcrypt from "bcrypt"
import User from "../models/user.js"


export const index = async (req, res) => {
    try {
        const users = await User.find({})
        return res.json({ status: "success", message: "OK", data: users })
    } catch (error) {
        return res.json({ status: "exception", message: error })
    }
}

export const store = async (req, res) => {
    try {
        const { name, email, mobile, password, location } = req.body

        let user = await User.findOne({ email: email })
        if (user) return res.json({ status: "error", message: "Email is already in use." })
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)

        user = await User.create({
            name: name,
            email: email,
            mobile: mobile,
            password: hashPassword,
            location: location
        })

        return res.json({ status: "success", message: "User added successfully.", data: user })

    } catch (error) {
        return res.json({ status: "exception", message: error })
    }
}

export const show = async (req, res) => {
    try {
        const { userId } = req.params

        const user = await User.findOne({ _id: userId })

        if (!user) return res.status({ status: "notfound", message: "User Not found." })

        return res.json({ status: "success", message: "OK", data: user })
    } catch (error) {
        return res.json({ status: "exception", message: error })
    }
}

export const destroy = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await User.findOne({ _id: userId })

        if (!user) return res.status({ status: "notfound", message: "User Not found." })

        await User.deleteOne({ email: email })
        return res.json({ status: "success", message: "User deleted successfully." })
    } catch (error) {
        return res.json({ status: "exception", message: error })
    }

}