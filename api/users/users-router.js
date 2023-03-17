const router = require('express').Router();
//owner işlemeleri
router.get('/',(req,res,next)=>{
    res.status(200).json({message:'users working'})
})

router.delete('/',(req,res,next)=>{
    res.status(200).json({message:'users delete working'})
})
// user işlemleri
router.put('/:id',(req,res,next)=>{
    res.status(200).json({message:`${req.params.id}users update working`})
})



module.exports=router;