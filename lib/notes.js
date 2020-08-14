'use strict';

const NoteModel = require('./notes-schema.js');

class Note {
  constructor(option){
    this.action = option.command.action;
    this.payload = option.command.payload;
    this.category = option.command.category;
  }

  async execute(){
    switch (this.action){
      case 'add':
        this.add(this.payload, this.category);
        break;
      case 'list':
        this.list(this.category);
        break;
      case 'delete':
        this.delete(this.payload)
        break;
      default:
        Promise.reslove();
        break;
    }
  }

  async add(text, category){
    const addNote = new NoteModel({category, text});
    let saveNote = await addNote.save();
    console.log(`Adding Note: ${text}`);
    return saveNote;
  }

  async list(category){
    const noteList = await NoteModel.find({category : category});
    console.log('Note List: ', noteList);
    return noteList;
  }

  async delete(id){
    await NoteModel.deleteOne({_id:id}, function(err) {
      if(err){
        console.log('error');
      }
      console.log('Note deleted');
    })
  }

}


module.exports = Note;