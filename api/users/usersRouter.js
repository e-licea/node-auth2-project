const express = require('express');
const router = express.Router();
//imports

//exports
module.exports = router;

router.get('/', (req, res)=>{
    
    res.status(200).json({message: `Hello there from the users`})
})