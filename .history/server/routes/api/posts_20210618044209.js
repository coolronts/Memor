import express from 'express'
import mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', (req, res) => {
    res.send("Hello");
})


//Add Posts



//Delete Posts

module.exports = router;