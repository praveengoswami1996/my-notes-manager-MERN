const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running....")
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((note) => {
        return note._id === req.params.id;
    })
    res.send(note);
})

//Creating basic server in node js using express
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})