require('dotenv').config()
const userModel = require('../model/user') 
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')

async function sendOtp(resEmail,otp,){
    try{ 
        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth : {
              user : "mortelcommunity@gmail.com",
              pass : "wahtkfjluizmrelq"
            }    
          })
 
         await transporter.sendMail({
            from:"mortelcommunity@gmail.com.com",
            to:resEmail.toString(),
            subject:"OTP From PEQUE Services",
            text:`Thankyou For Visiting Our App Your OTP is ${otp}.This mail is sended by peque services limited`,
            html:`<h3>Thankyou For Visiting Our App<h3/> <center><h3>Your OTP is<h3/> <h1>${otp}<h1/> <center/><p><p/> <p>This mail is sended by TABOX services limited<p/>`
          }).then(() => console.log("mail sended")).catch((err) => console.log(err))

    }
    catch(err){
        res.status(500).json(err)
    }
}


const SignUp = async (req,res) => {
   try{
     let email = req.body.email
     let password = req.body.password
     
     let availableEmail = await userModel.findOne({email:email})

     if(availableEmail){
      res.status(200).json("Email is already is registerd")    
     }
     else if(password.length < 7){
      res.status(200).json("Please enter a password atleast 7 characters")
     }
     else{
      let hashPassword = await bcrypt.genSalt(10).then(salt => {
        //console.log('Salt: ', salt)
        return bcrypt.hash(password, salt)}).catch((err) => console.log(err))
        
        let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets: false });
        //console.log(otp) 
      

       const data = await userModel.create({
        email : email,
        password : hashPassword,
        otp : otp
       })

       await data.save()
       await sendOtp(email,otp)
       res.status(200).json(data)
     }
   }
   catch(err){
    res.status(500).json(err)
   }
}


const otpVerify = async (req,res) => {
  let id = req.params.id
  let Gotp = req.body.otp
  try{
    let user = await userModel.findById({_id:id})
    //console.log(user.otp)
    //console.log(Gotp)
    
    if(user){
    
      if(user.otp == Gotp){
          await userModel.findByIdAndUpdate({_id:id},{
            verified : true,
            otp : ""
          })
          const asstoken = jwt.sign(
            {id : user._id,verified : user.verified},
            process.env.KEY,
            {expiresIn:"5d"}
          )
          res.status(200).json(asstoken);
        }

        else{
         res.status(200).json("Incorrect OTP")
        }
    }
    else{
      res.status(404).json("Invalid User");
    } 
  }
  catch(err){
    res.status(500).json(err)
  }
}

const SignIn = async (req,res) => {
    try{
      let email = req.body.email
      let password = req.body.password
      //console.log(password)
      let user = await userModel.findOne({email:email})
      if(user){
        //console.log(user.password)
        if(user.verified){
          bcrypt.compare(password, user.password, function(err, result) {
            if(result == true){
             const asstoken = jwt.sign(
               {id : user._id,verified : user.verified},
               process.env.KEY,
               {expiresIn:"5d"}
             )
             const {password,...info} = user._doc
             res.status(200).json({...info,asstoken})
            }
            else{
             res.status(200).json("Incorrect Password")
            }
         });
        }
        else{
          res.status(201).json("your email is not verified")
        }
      }else{
        res.status(200).json("Email id is not registered")
      }
    }
    catch(err){
      res.send(err)
    }
 }

 module.exports = {SignIn,SignUp,otpVerify}

