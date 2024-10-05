const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../model/user.model')
const token = require('../../config/token')
const userRegister = async(req,res)=>{

    const {email,password} = req.body

    try{

        if(!(validator.isEmail(email))){

            return res.json({message: "enter valid email"})
        }
        if(!(validator.isStrongPassword(password))){
    
            return res.json({message:"please enter Strong password"})
    
        }else{
    
            const findUser = await UserModel.findOne({email})
    
            if(findUser){
    
               return res.json({mesaage: "This user already exsists"})
            }
            
            const hashPassword = await bcrypt.hash(password, 10)
    
            const saveUser = UserModel.create({email,password:hashPassword})
    
            await saveUser.save()
    
            return res.json({message:"user register successfully "})
    
        }
    

    }
    catch(error){

        console.log(error)

    }

   
}

const userLogin = async(req,res)=>{

    const {email,password} = req.body

    try{
        
        if(!(validator.isEmail(email))){

            return res.json({message: "enter valid email"})
        }
        if(!(validator.isStrongPassword(password))){
    
            return res.json({message:"please enter Strong password"})
    
        }else{
    
            const findUser = await UserModel.findOne({email})
    
            if(!findUser){
    
               return res.json({mesaage: "This user doesn't exsist"})
            }
            
            const comparePassword = await bcrypt.compare(password,findUser.password)
    
           if(!comparePassword){

            return res.json({message:"please provide valid password"})

           }

           const userToken = jwt.sign({id:findUser._id},token)
    
            return res.json(userToken)
    
        }
    

    }
    catch(error){

        console.log(error)

    }
}

module.exports = {userRegister,userLogin}