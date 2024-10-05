const multer = require("multer")
const path = require('path');
const BookModel = require("../model/book.model");


const filesDir = path.join(__dirname, '../files');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, filesDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
const postBook = async ( req,res)=>{

    const {title,category} = req.body

    try{

        console.log(req.file)
        const savedFile = await BookModel.create({files: req.file.filename,title,category})
        return res.json(savedFile)

    }catch(error){
           console.log(error)
    } 
   
}

const getdata = async(req,res)=>{
    try{
        const data = await BookModel.find({})
        console.log("i am data",data)
        return res.json(data)

    }catch(error){
        console.log(error)
    }
}

module.exports ={postBook , upload , getdata}