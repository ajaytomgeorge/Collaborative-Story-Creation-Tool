require('../models/database');
const Category = require('../models/Tags');
const Story = require('../models/Story');

/**
 * GET /
 * Story Info
 */

exports.homepage = async(req,res) => {
    
    // try {

    //     const limitNumber = 5;
    //     const categories = await Category.find({}).limit(limitNumber);
        
    //     res.send('The views directory is ',categories )
    // } catch (error) {
    //     res.status(500).send({message: error.message || "Error occured" })
    // }
    res.send('The views directory is ')
    
    


}







// async function insertDummyData(){
    
//     try {
//         await Category.insertMany([
//             {
//                 "name" : "Dennis",
//                 "image" : "../assets/food.jpg"
//             },
//             {
//                 "name" : "Dennis",
//                 "image" : "../assets/food.jpg"
//             },
//             {
//                 "name" : "Dennis",
//                 "image" : "../assets/food.jpg"
//             },
//             {
//                 "name" : "Dennis",
//                 "image" : "../assets/food.jpg"
//             },
//             {
//                 "name" : "Dennis",
//                 "image" : "../assets/food.jpg"
//             },
//             {
//                 "name" : "Dennis",
//                 "image" : "../assets/food.jpg"
//             }
//         ]);

//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyData();