const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../config/index');
router.get('/',(req,res,next)=>{
    res.status(200).json({message:'auth working'})
})
router.post('/register',(req,res,next)=>{
    res.status(200).json({message:'register working'})
})
router.post('/login',(req,res,next)=>{

    // get user from the db
const user = {user_id: 1, role: "user"};
    //password kontrolü

    //generate token
const token=generateToken(user);
    //return token
    res.status(200).json({message:'login working',token})
})
function generateToken(user){
    const payload = {id: user.user_id,role:user.role};
    const options = {expiresIn: '1h'};
    const token= jwt.sign(payload,JWT_SECRET,options);
    return token;
}


module.exports=router;