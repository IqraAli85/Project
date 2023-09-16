const router = require("express").Router();
const Stops = require("../models/busRouteModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/addStop", async (req,res)=>{
  try{
      const newStop = new Stops(req.body);
      await newStop.save();
      res.send({
       success: true,
       message: "New stop inserted successfully!!",
      }) ;        
  } catch(error) {
     res.send({
         success: false,
         message: error.message,
     });
  }
});



//fetch all products 
router.post("/fetchStop",  async (req,res)=>{
  try{
      const products = await Stops.find().sort({ createdAt: -1}) ;
      res.send({
       success: true,
  
      }) ;        
  } catch(error) {
     res.send({
         success: false,
         message: 'error is from fetch info',
     });
  }
});

//update the existing product by id
router.put("/updateStop/:id", async (req,res) =>{
    try{
        await Stops.findByIdAndUpdate(req.params.id, req.body);
        res.send({
          success: true,
          message: "information updated successfully",
      });
    }catch(error) {
     res.send({
         success: false,
         message: 'error coming from update',
     });
  }
});

//Delete the existing product by id
router.delete("/deleteStop/:id",  async (req,res) =>{
  try{
      await Stops.findByIdAndDelete(req.params.id);
      res.send({
        success: true,
        message: " deleted successfully",
    });
  }catch(error) {
   res.send({
       success: false,
       message:'error coming from delete' ,
   });
}
});
module.exports = router


