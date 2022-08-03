//Chalange 1

// // const fs = require('fs')
// // fs.writeFileSync('notes.txt', 'this file 2')
// // fs.appendFileSync('notes.txt', 'txt1')

// const add = require('./utils.js');
// // const name = require('./utils.js')

// // console.log(name);
// const sum = add(4, 8)

// console.log(sum);

//Challange 2
// const getNotes = require("./notes.js");
// const mes = getNotes()
// console.log(mes);

// validator

// const validator = require('validator')

// console.log(validator.isEmail('vandana@gmail.com'));
// console.log(validator.isURL('https://nodejs.dev/download/'));

// Challenge : use chalk library

// const chalk = require('chalk')

// greenMes = chalk.green.inverse.bold('sucess..!!')
// console.log(greenMes);

// Getting Input from Users
const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//Add command
yargs.command({
  command: "add",
  describe: "Add a New Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log('Title', argv.title);
    // console.log('Body', argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//Remove command
yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
    // console.log('Remove Handler!!!!!');
  },
});

//Read command
yargs.command({
  command: "read",
  describe: "Read a Note",
  builder: {
    title: {
        describe: "Read Note",
       demandOption: true,
        type: "string",
    },
  },
  handler(argv) {
      notes.readNote(argv.title)
    //console.log("Read a New Note!!!!!");
  },
});

//List command
yargs.command({
  command: "list",
  describe: "List a New Note",
  handler(argv) {
    notes.listNote(argv.title);
    //console.log('List Handler!!!!!');
  },
});

// add , remove, read, list

yargs.parse();
// console.log(yargs.argv);

//console.log(process.argv);
