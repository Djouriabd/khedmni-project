
const AdminMiddleware = (req,res,next) =>{
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({message:"you are admin"})
    }
    next()
}

module.exports = AdminMiddleware