import { Router } from "express";
import { destroy, index, show, store } from "../controllers/usercontroller.js";


const router = Router()

router.get('/', (req, res) => {
    res.json({ message: "Hello!!!" })
})

router.get('/users', index)
router.post('/users', store)
router.get('/users/:userId', show)
router.delete('/users/:userId', destroy)

export default router