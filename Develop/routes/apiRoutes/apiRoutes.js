//Note: Importing existing note data from JSON file, utility function for note management, and creating new express router
const { notes } = require("../../db/db.json");
const {verifyNote, createNote } = require("../../lib/notes.js");
const router = require("express").Router();

//Note:GET route to fetch all the notes
router.get("/notes", (req, res) => {
    res.json(notes);
});

//Note: POST route to create a new note, use verification function, and create new note to add to the array
router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    if (!verifyNote(req.body)) {
        res.status(400).send("Please verify your note format is correct!");
    } else {
        const newNote = createNote(req.body, notes);
        res.json(newNote);
    }
});

//Note: Exporting configured router to be used in other parts of this application
module.exports = router;