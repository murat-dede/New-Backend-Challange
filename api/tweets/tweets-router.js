const router = require('express').Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({message:'list of my tweets working'})
})
router.get('/:id',(req,res,next)=>{
    res.status(200).json({message:`${req.params.id}list of my tweets coming`})
})
router.post('/',(req,res,next)=>{
    res.status(200).json({message:'new tweets working'})
})
router.put('/:id',(req,res,next)=>{
    res.status(200).json({message:`${req.params.id} tweets update working`})
})
router.delete('/',(req,res,next)=>{
    res.status(200).json({message:'tweets delete working'})
})





module.exports=router;