const express = require("express");
const router = express.Router();
const db = require("../db/sql");

router.post("/",async(req,res) => {

    const { title , body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: 'Title and body are required' });
    }

    try {
        const [result] = await db.execute(
          'insert into notes (title, body) VALUES (?, ?)',
          [title, body]
        );
    
        res.status(201).json({
          message: 'Note created successfully',
          noteId: result.insertId 
        });
      } catch (error) {
        console.error('Error inserting note:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

module.exports = router;