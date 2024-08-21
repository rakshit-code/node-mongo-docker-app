import express from "express"
import users from './user.route.js'
const router=express.Router()
router.use('/user',users)

export default router