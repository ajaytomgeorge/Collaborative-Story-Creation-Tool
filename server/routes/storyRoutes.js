const express = require("express")
const router = express.Router()

const storyController = require("../controllers/storyController");
/**
 * App Routes
 */

router.get('/', storyController.homepage)


//Register
router.post("/register",async(req,res)=>{
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        const user = await newUser.save();
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;