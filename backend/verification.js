require('dotenv').config()
const jwt = require('jsonwebtoken')

const verification = async(req,res,next) => {
    try{
        const authHeader = req.headers.token
        if(authHeader){
             const token = authHeader.split(" ")[1]
             jwt.verify(token,process.env.KEY,(err,user) => {
                if(err) res.status(403).jsonp("token is not valid")
                req.user = user
                next()
             })
        }else{
            res.status(401).jsonp("you are not authenticated")
        }
    }
    catch(err){
        res.status(500).jsonp(err)
    }
}

module.exports = verification;