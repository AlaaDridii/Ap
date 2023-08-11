const mongoose = require("mongoose");
// connect to dabase 
const connectdb = async()=>{
    try{
 await mongoose.connect(process.env.mongo_url)
 console.log("the world seeing Us");
    }catch(err){
        console.log(err)
    }
}
module.exports=connectdb