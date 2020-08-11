'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

function Input(){
  const args = minimist(process.argv.slice(2));

  this.command = this.parse(args);
  // if ('add' in args || 'a' in args){
  //   if (args['add'] !== true || args['a' !== true]){
  //     console.log('happy');
  //   }
  }

  this.method = this.getMethod(args.m);
  this.url = this.getUrl(args.u);
}

Input.prototype.parse = function (args){

  let argsMap = {
    a: 'add',
    add: 'add',
    d: 'delete'
  }

  let arg = Object.keys(args.filter(arg => argsMap[arg])[0]);

  const command = {
    action: argsMap[arg],
    payload: args[arg]
  }

  if (command.action === undefined || command.payload === true){
    console.log('bad input');
  } else {
    console.log('good input');
  }

  return command;
}

Input.prototype.getMethod = function (method = ''){
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
}

Input.prototype.getUrl = function (url = ''){
  return isUrl(url) ? url : undefined;
}

module.exports = Input;