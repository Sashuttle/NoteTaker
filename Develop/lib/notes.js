//Note: Importing file system module & import path module to work with my file and directory paths
if (typeof require !== 'undefined') {
const fs = require("fs");
const path = require("path");

//Note: Verifying the validity of note objects & checking if title and body are not empty
function verifyNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}

//Note: Function to create a new note and update the notes array
function createNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

//Note: Exporting the functions to be used in other parts of the application
module.exports = { verifyNote, createNote };
}