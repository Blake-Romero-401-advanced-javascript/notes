'use strict';

class Note {
  constructor(option){
    this.action = option.command.action;
    this.payload = option.command.payload;
    this.execute();
  }

  execute(){
    switch (this.action){
      case 'add':
        this.add(this.payload);
        break;
      default:
        break;
    }
  }

  add(payload){
    let id = new Date().getTime();
    let realId = id.toString().slice(5);
    console.log(`Note #${realId}: `, payload);
  }

}





// function Note(option){
//   // console.log('Note option: ', option);
//   this.action = option.command.action;
//   this.payload = option.command.payload;
//   this.execute();
// }

// Note.prototype.execute = function(){
//   switch (this.action){
//     case 'add':
//       this.add(this.payload);
//       break;
//     default:
//       break;
//   }
// }

// Note.prototype.add = function(payload){
//   let id = new Date().getTime();
//   let realId = id.toString().slice(5);
//   console.log(`Note #${realId}: `, payload);
// }

module.exports = Note;