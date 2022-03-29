require('../models/database');
const User = require('../models/User');
const Tags = require('../models/Tags');
const Story = require('../models/Story');
const Logs = require('../models/Logs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 *60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.MY_SECRET , {
        expiresIn: "1h"
    });
}

/**
 * GET /
 * Story Info
 */

exports.homepage = async(req,res) => {
    
    res.send('The views directory is ')
    
}


/**
 * POST /
 * Register User
 */

 exports.registerUser = async(req,res) => {
    
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPass = await bcrypt.hash(req.body.password,salt);
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        })
        
        const user = await newUser.save();

        const token =  createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge : 1000000 });
        res.status(200).json(" User created successfully ");
        
    } catch (error) {
        res.status(500).json(error);
    }
    
}



/**
 * POST /
 * Login User
 */

 exports.loginUser = async(req,res) => {
    
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user){
            res.status(400).json("Wrong credentials!");
            return;
        }
        
        
        const validate = await bcrypt.compare(req.body.password, user.password);
        if(!validate){
            res.status(400).json("Wrong credentials!!!");
            return;
        }
        
        // res.cookie('jwt', token, { httpOnly: true });
        const { password, ...others } = user._doc;
        res.status(200).json(others);
        
    } catch (error) {
        res.status(500).json(error);
    }
    
}



/**
 * PUT /
 * Update User
 */

 exports.updateUser = async(req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
            {
                new:true
            });
            res.status(200).json(updatedUser);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(401).json("You can update only your account");
    }
    
    
}

/**
 * DELETE /
 * Delete User
 */

 exports.deleteUser = async(req,res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.body.id);
            if(user){
                try {
                    await Story.deleteMany({ username: user.username });
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User has been deleted ");
                    
                } catch (error) {
                    res.status(500).json(error);
                }
            }else{
                res.status(401).json("User not found");
            }
            
        } catch (error) {
            res.status(401).json(error);
        }
        
    }
    else{
        res.status(401).json("You can delete only your account");
    }
    
    
}

















// async function insertDummyData(){
    
//     try {
//         await User.insertMany([
//             {
//                 "username" : "Test1",
//                 "email" : "test@gmail.com",
//                 "password" : "Test123"
//             },
//             {
//                 "username" : "Test2",
//                 "email" : "test2@gmail.com",
//                 "password" : "Test123"
//             },
//             {
//                 "username" : "Test3",
//                 "email" : "test3@gmail.com",
//                 "password" : "Test123"
//             },
//             {
//                 "username" : "Test4",
//                 "email" : "test4@gmail.com",
//                 "password" : "Test123"
//             },
//             {
//                 "username" : "Test5",
//                 "email" : "test5@gmail.com",
//                 "password" : "Test123"
//             }
//         ]);

//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// async function insertDummyTagData(){
    
//     try {
//         await Tags.insertMany([
//             {
//                 "name" : "Test1"
//             },
//             {
//                 "name" : "Test2"
//             },
//             {
//                 "name" : "Test3"
//             },
//             {
//                 "name" : "Test4"
//             },
//             {
//                 "name" : "Test5"
//             }
//         ]);

//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// async function insertDummyStoryData(){
    
//     try {
//         await Story.insertMany([
//             {
//                 "userId" : "623b6c1fa915f522c633f826",
//                 "title" : "Test Story 1",
//                 "text" : "Good Story 1",
//                 "tags" : "623b6d03177366786f0bec77"
//             },
//             {
//                 "userId" : "623b6c1fa915f522c633f826",
//                 "title" : "Test Story 2",
//                 "text" : "Good Story 2",
//                 "tags" : ["623b6d03177366786f0bec77","623b6d03177366786f0bec79"]
//             },
//             {
//                 "userId" : "623b6c1fa915f522c633f827",
//                 "title" : "Test Story 3",
//                 "text" : "Good Story 3",
//                 "tags" : ["623b6d03177366786f0bec77","623b6d03177366786f0bec79"]
//             },
//             {
//                 "userId" : "623b6c1fa915f522c633f828",
//                 "title" : "Test Story 4",
//                 "text" : "Good Story 4",
//                 "tags" : ["623b6d03177366786f0bec77","623b6d03177366786f0bec7a"]
//             },
//             {
//                 "userId" : "623b6c1fa915f522c633f828",
//                 "title" : "Test Story 5",
//                 "text" : "Good Story 5",
//                 "tags" : ["623b6d03177366786f0bec77","623b6d03177366786f0bec7a"]
//             }
//         ]);

//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// async function insertDummyLogData(){
    
//     try {
//         await Logs.insertMany([
//             {
//                 "storyId" : "623b70231038486dabe49eee",
//                 "userId" : "623b6c1fa915f522c633f826",
//                 "comment" : "Story created1"
//             },
//             {
//                 "storyId" : "623b70231038486dabe49eef",
//                 "userId" : "623b6c1fa915f522c633f826",
//                 "comment" : "Story created2"
//             },
//             {
//                 "storyId" : "623b70231038486dabe49ef0",
//                 "userId" : "623b6c1fa915f522c633f827",
//                 "comment" : "Story created3"
//             },
//             {
//                 "storyId" : "623b70231038486dabe49ef1",
//                 "userId" : "623b6c1fa915f522c633f828",
//                 "comment" : "Story created4"
//             },
//             {
//                 "storyId" : "623b70231038486dabe49ef2",
//                 "userId" : "623b6c1fa915f522c633f828",
//                 "comment" : "Story created5"
//             }
//         ]);

//     } catch (error) {
//         console.log('err', + error)
//     }
// }

//insertDummyLogData();
//insertDummyStoryData();
// insertDummyTagData();
// insertDummyData();