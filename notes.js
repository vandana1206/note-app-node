const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return " Yours Notes....!!!!!";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  //   const duplicateNotes = notes.filter(function (note) {
  //     return note.title == title;
  //   });
  const duplicateNotes = notes.filter((note) => note.title == title);

  const duplicateNote = notes.find((note) => note.title == title);

  debugger
  //   console.log(duplicateNote);
  //   console.log(title);
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    savedNotes(notes);
    console.log(chalk.red.inverse("New Note Added"));
  } else {
    console.log(chalk.red("Already Added"));
  }
};

const removeNote = (title) => {
  //console.log(title);
  const notes = loadNotes();
  const keepNotes = notes.filter((note) => note.title !== title);
  if (notes.length > keepNotes.length) {
    console.log(chalk.red.inverse("Note Removed"));
    savedNotes(keepNotes);
  } else {
    console.log(chalk.red("No Note Found"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes Title"));
  notes.forEach((note) => {
    console.log(chalk(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.cyan.inverse(note.title));
    console.log(chalk.yellow(note.body));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};
const savedNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
