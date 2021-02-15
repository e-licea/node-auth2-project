const express = require('express');
const router = express.Router();
//imports
const userModel = require('../../model/userModel');
//exports
module.exports = router;


//GET - Users within the same department after login

router.get('/', restricted(), async (req, res, next)=>{
    const {department} = req.session.user
    
    return await userModel.get({department})
    .then(users=>{
        res.status(200).json({ users: users})
    })
    .catch(err=>next(err))
    
})

//middlewares

    //restrict
function restricted(){
    return (req, res, next)=>{
        if(req.session.user && req.session.token){
            console.log(`User Authenticated`);
            next();
        }else{
            res.status(403).json({message: `You are unauthorized`})
        }
    }
}