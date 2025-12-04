const express = require('express')
const AuthController = require('../controller/Authcontroller')

const router = express.Router()


router.post("/register", AuthController.register)
router.post("/login", AuthController.login);  // <-- new login route



module.exports= AuthRoutes = router
