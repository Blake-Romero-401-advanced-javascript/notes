'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

class Input {
  
  constructor(){
    const args = minimist(process.argv.slice(2));
    // console.log('this is the args', args);
    this.command = this.parse(args);
    this.parse(args);
  }
  //input args = object containing { _: [], add: 'new note' }
  //output = { action: 'add', payload: 'new note' }
  
  //choose of filter a command
  parse(args){
    let action = '';
    let payload = 'new note';
    
    if ('add' in args || 'a' in args){
      action = 'add';
    }

    return {
      action,
      payload,
    }
  }

  valid(){
    //true boolean representation
  return !!(this.command.action && this.command.payload);
  }

}




// should take input from user and send to validate
// function Input(){
//   const args = minimist(process.argv.slice(2));

//   this.command = this.parse(args);
//   // if ('add' in args || 'a' in args){
//   //   if (args['add'] !== true || args['a' !== true]){
//   //     console.log('happy');
//   //   }
// }

//   // this.method = this.getMethod(args.m);
//   // this.url = this.getUrl(args.u);

// //validate user input then send to note option
// Input.prototype.parse = function (args){

//   let argsMap = {
//     a: 'add',
//     add: 'add',
//     d: 'delete',
//     del: 'delete'
//   }

//   let arg = Object.keys(args).filter(arg => argsMap[arg])[0];

//   const command = {
//     action: argsMap[arg],
//     payload: args[arg]
//   }

//   if (command.action === undefined || command.payload === true){
//     console.log('Invalid input');
//   } else {
//     console.log('Good input');
//   }

//   return command;
// }

// Input.prototype.getMethod = function (method = ''){
//   let validMethods = /get|put|patch|post|delete/i;
//   return validMethods.test(method) ? method : 'Invalid Command';
// }

// Input.prototype.getUrl = function (url = ''){
//   return isUrl(url) ? url : undefined;
// }

// Input.prototype.valid = function(){
//   //true boolean representation
//   return !!(this.command.action && this.command.payload);
// }

module.exports = Input;