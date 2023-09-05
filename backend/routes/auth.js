const router = require('express').Router()
const index = require("../controller/auth")

router.post("/signup",index.SignUp)

router.post("/signin",index.SignIn)

router.post("/verifyotp/:id",index.otpVerify)

module.exports = router