#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');
const Notes = require('./lib/notes.js');

const options = new Input();

HTTP.fetch(options);