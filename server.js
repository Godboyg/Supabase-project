const express = require("express");
const app = express();
const CreateNotes = require("./functions/post_notes");
const GetNotes = require("./functions/get_notes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// to create a new note i have used create_notes
app.use("/create_notes" , CreateNotes);

// to get all notes i have used /get_notes
app.use("/get_notes" , GetNotes);

app.get("/",(req,res) => {
    res.send("hello from supabase backend");
})

app.listen(3000 , () => {
    console.log("sever connected");
});