#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
// const HTTP = require('./lib/http.js');
const Note = require('./lib/notes.js');

const input = new Input();

const command = new Note(input);
// HTTP.fetch(options);

input.valid() ? command.execute() : help();

function help() {
  console.log('Something went wrong!!!');
  process.exit();
}