const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();


require('../db/conne');
const User = require('../model/storeSchema');

router.get('/',(req,res)=>{
    res.send("hello from ROUTER home")
});

// ==================== Signup page =================

router.post('/signup',async (req , res)=>{
    // res.send("home page at router page...");
    // console.log(req.body);

   const { name , fname , email , phone , address , roll } = req.body;
 
    if( !name || !fname || !email || !phone || !address || !roll){
        return res.status(422).json({error:"Plz fillup correct detail"});
    }
    try{

        const userExist = await User.findOne({email:email});
        const userExistphone = await User.findOne({phone:phone});
        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }else if(userExistphone){
            return res.status(422).json({error:"phone number already exist please change it"});
        }
        const user = new User({name ,fname ,email , phone , address , roll});
        
        // hash roll number before save


        await user.save();
        res.status(201).json({massage:"user signup successfully"});
    }catch(err){
        console.log(err);
    }
});

// ================= Login page ================

router.post('/login',async (req,res)=>{
    try{
        const {email , roll} = req.body;
        if(!email || !roll){
            return res.status(404).json({error:"plz fill the data carefully"})
        }
        const userLogin = await User.findOne({email : email});
if(userLogin){
    const isMatch = await bcrypt.compare(roll , userLogin.roll);
    if(!isMatch){
        res.status(400).json({error:"Invalid credential"});
    }
    else{
        res.json({massage:"user login successfully"});
    }
}
    }catch(err){
        console.log(err)
    }
});

module.exports = router;