#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
// const HTTP = require('./lib/http.js');
const Note = require('./lib/notes.js');

const input = new Input();

const note = new Note(input);
// HTTP.fetch(options);

input.valid() ? note.execute() : help();

function help() {
  console.log('Something went wrong!!!');
  process.exit();
}