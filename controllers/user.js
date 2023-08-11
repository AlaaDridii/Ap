// Import the user schema from the '../Models/user' module
const userSchema= require('../Modeles/user')

// Add a new user to the database
exports.AddUser = async (req,res)=>{
    try{

   // Create a new user instance using the data from the request body
  const newUser= new userSchema(req.body)
   // Save the new user to the database
  await newUser.save()
   // Send a success response with the newly added user's data
  res.status(200).send({msg:'the new user has been added successfully',newUser})

    }catch(err){
  // If an error occurs, send an error response and log the error
        res.status(500).send('can not add this user')
        console.log(error)
    }
    
 }
// Get all users from the database
exports.getAllUsers = async(req,res)=>{
    try{ 
    // Retrieve all users from the database
        const Users = await userSchema.find()
    // Send a success response with the array of users
        res.status(200).send(Users)
    }catch(err){
     // If an error occurs, send an error response and log the error
        res.status(500).send('error in getting users')
        console.log(err)

    }
 }


// Update a user's information by their ID
 exports.updateUser = async (req,res)=>{
    try {
         // Extract the user ID from the request parameter
        const {id}= req.params
         // Find the user by ID and update their information with the data from the request body
        await userSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        // Send a success response
        res.status(200).send('the user has been updated succufully')
    } catch (error) {
         // If an error occurs, send an error response and log the error
        res.status(500).send('cannot update the selected user')
        console.log(error)
    }
}

//delete a user by id

exports.deleteUser = async (req,res)=>{
    try {
        const {id} = req.params
    await userSchema.findByIdAndRemove(id)
    res.status(200).send('the user has been removed succesfully')
    } catch (error) {
        res.status(500).send('cannot delete the selected user')
        console.log(error)
    }
}