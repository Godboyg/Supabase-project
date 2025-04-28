const express = require("express");
const router = express.Router();
const db = require("../db/sql");

router.get("/",async(req,res) => {
    try{
        const [notes] = await db.execute(`select * from notes`);
        res.json({ message : "all notes" , notes});
    }catch(err){
        res.json(err);
    }
})

module.exports = router;