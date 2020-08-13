#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
// const HTTP = require('./lib/http.js');
const Note = require('./lib/notes.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, 
useUnifiedTopology: true,
});

const input = new Input();

const note = new Note(input);
// HTTP.fetch(options);
//I want to model a note for storage
// const Note = mongoose.model('Note', {
  // id: String, note: note
// })

input.valid() ? note.execute() : help();

function help() {
  console.log('Something went wrong!!!');
  process.exit();
}