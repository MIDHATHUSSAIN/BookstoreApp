const jwt = require('jsonwebtoken')
const token = require('../../config/token')
const Authentication =(req,res,next)=>{

    const auth = req.headers.authorization || req.headers.Authorization

    if(!auth){

        return res.json({message:"please provide valid token"})
    }

    jwt.verify(auth,token,(error,decoded)=>{

        if(error){
           
            return res.json(error)

        }

        req.id = decoded.id
        next()
    })

}

module.exports = Authentication