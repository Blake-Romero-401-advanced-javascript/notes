'use strict';

const NoteModel = require('./notes-schema.js');

class Note {
  constructor(option){
    this.action = option.command.action;
    this.payload = option.command.payload;
    // this.execute();
  }

  execute(){
    switch (this.action){
      case 'add':
        this.add(this.payload, this.category);
        break;
      case 'list':
        this.list();
        break;
      case 'delete':
        this.delete(this.id)
        break;
      default:
        break;
    }
  }

  async add(text, category){
    const addNote = new NoteModel({category, text});
    let saveNote = await addNote.save();
    console.log(`Adding Note: ${text}`);
    return saveNote;
  }

  async list(){
    const noteList = await NoteModel.find();
    console.log('Note List: ', noteList);
  }

  async delete(id){
    await NoteModel.deleteNote({_id:id}, function(err) {
      if(err){
        console.log('error');
      }
    })
  }

}


module.exports = Note;