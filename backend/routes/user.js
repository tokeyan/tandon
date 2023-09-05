const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const verification = require('../verification')
const user = require('../controller/userAction')

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,path.join(__dirname,'../public/tabimg'))
    },
    filename:(req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||  file.mimetype === 'image/jpg'){
        cb(null,true);
    }
    else{
        console.log("not supported file format");
        cb(null,false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 25,
    },
    fileFilter: fileFilter
})

//router.put("/uploadimage/:id",upload.single("file"),user.upProfileImg)


module.exports = router