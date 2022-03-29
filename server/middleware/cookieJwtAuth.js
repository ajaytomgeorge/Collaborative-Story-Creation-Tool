const jwt = require("jsonwebtoken");

const requireAuth = (req,res,next) => {
    const token = req.cookies.token;
    try {
        if(token){
            const user = jwt.verify(token, process.env.MY_SECRET, (err, decodedToken) => {
                if(err){
                    console.log(err.message);
                    res.redirect('/login');
                } else{
                    console.log(decodedToken);
                    next();
                }
            });
        }
    } catch (error) {
        // res.clearCookie("token");
        return res.redirect('/login');
    }
}

module.exports = { requireAuth };