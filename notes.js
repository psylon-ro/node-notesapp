const fs= require('fs');
const chalk= require('chalk')

function addNotes(title, body){
    const notes= loadNotes();

    const duplicatenote= notes.find(function(note){
        return note.title===title;
    })

    if(!duplicatenote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }else{
        console.log(chalk.red.inverse('note title taken'))
    }
    
}

function removeNotes(title){
    const notes= loadNotes();

    const afterremovalnotes= notes.filter(function(note){
        return note.title !== title;
      });

    if(afterremovalnotes.length<notes.length){
        saveNotes(afterremovalnotes)
        console.log(chalk.green.inverse('note removed'))
    }else{
        console.log(chalk.red.inverse('title doesnt exist'))
    } 
}

function listNotes(){
    const notes= loadNotes();
    console.log(chalk.blue.inverse.bold('Your Notes!'))
    notes.forEach((note) => {
        console.log(chalk.green(note.title));
    });
}

function readNotes(title){
    const notes= loadNotes();

    const duplicatenote= notes.find((note)=>note.title===title)
     if(duplicatenote){
        console.log(chalk.inverse.blue(duplicatenote.title))
        console.log(duplicatenote.body)
    } else{
        console.log(chalk.red.inverse('no notes found'))
    }

}

function saveNotes(notes){
    const datajson = JSON.stringify(notes)  
    fs.writeFileSync('notes.json',datajson)
}


function loadNotes(){
try{
    const buffer=fs.readFileSync('notes.json')
    const data= buffer.toString()
    return JSON.parse(data)
}catch(e){
    return []
}
}

module.exports = {
addNotes:addNotes,
removeNotes:removeNotes,
listNotes:listNotes,
readNotes:readNotes
};