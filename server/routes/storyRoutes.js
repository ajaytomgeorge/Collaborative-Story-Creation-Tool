const express = require("express")
const router = express.Router()
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const storyController = require("../controllers/storyController");
/**
 * App Routes
 */

router.get('/', storyController.homepage);
router.post('/register', storyController.registerUser);
router.post('/login', storyController.loginUser);
router.put('/:id', storyController.updateUser);
router.delete('/:id', storyController.deleteUser);




//Register
// router.post("/register",async(req,res)=>{
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPass = await bcrypt.hash(req.body.password,salt);
        
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPass

//         })
        
//         const user = await newUser.save();

//         const token =  createToken(user._id)
//         res.cookie('jwt', token, { httpOnly: true, maxAge : 1000000 });
//         res.status(200).json({user : user._id});
        
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

//Login
// router.post("/login",async(req,res)=>{
//     try {
//         const user = await User.findOne({username: req.body.username});
//         if(!user){
//             res.status(400).json("Wrong credentials!");
//             return;
//         }
        
//         const validate = await bcrypt.compare(req.body.password,user.password);
//         if(!validate){
//             res.status(400).json("Wrong credentials!");
//             return;
//         }
        
//         res.cookie('jwt', token, { httpOnly: true, maxAge : 1000000 });
//         res.status(200).json({user : user._id});
        
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

module.exports = router;