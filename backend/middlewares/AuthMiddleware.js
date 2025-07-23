const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) =>{
    //header ytb3t fih token
    //console.log("hadi srat f middleware lol")
    let token = req.headers.authorization
    //methode 1
    //token =token.replace("Bearer","")
    //methode 2
    token = token?.split(" ")[1]
    //console.log(token)
    /*console.log(req.headers)*/

    if(!token){
        return res.status(401).json({message:"you have to log in before process this function"})
    }

    try {
        //console.log("crypted token:",token)
        const decodedToken = jwt.verify(token,"SECRET")
        //console.log("uncrypted token:",decodedToken)
        req.user = decodedToken //hna n9dr ndir restore l anything
        next()
    } catch (error) {
        res.status(401).json({message:"invalid token"})
    }
}

module.exports = authMiddleware