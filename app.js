//const validator= require('validator')
const chalk= require('chalk')
const notes= require('./notes.js')
const yargs= require('yargs')

//add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'reading the note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes();
    }
})

yargs.parse()