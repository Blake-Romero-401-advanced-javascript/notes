#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
// const HTTP = require('./lib/http.js');
const Note = require('./lib/notes.js');

const options = new Input();

const command = new Note(options);
// HTTP.fetch(options);