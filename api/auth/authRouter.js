const express = require('express');
const router = express.Router();
//imports

//exports
module.exports = router;

//endpoints

    //POST - Logs user in

router.post('/', (req, res)=>{
    
    res.status(200).json({message: `Hello there from the login`});

});
    
    //POST - registsers a new user

router.post('/register', (req, res)=>{

    res.status(200).json({message: 'registers a new user'});

});
