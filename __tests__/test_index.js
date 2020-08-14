'use strict';

jest.mock('minimist');
const minimist = require('minimist');
require('@code-fellows/supergoose');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note ===========================',
  }
})

const Input = require('../lib/input.js');
const Note = require('../lib/notes.js');
const { TestScheduler } = require('jest');

jest.spyOn(global.console, 'log');

test('proves that tests are alive', () => {
  expect(true).toBe(true);
})


describe('Input Module', () => {

  it('parse() creates a good object', () => {
    let options = new Input();
    let command = options.parse({ add: 'new note' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('new note');
  });

  it('parse() creates a good object with single char', () => {
    let options = new Input();
    let command = options.parse({ a: 'new note' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('new note');
  });

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    options.command = {}; // break it
    expect(options.valid()).toBeFalsy();
  });

});

// describe('Execute Module', () => {
//   it('should execute if valid', () => {
//     //for execute to work should add a new note if input is valid
    
//   })
// })

//Nothing is logged to console if no command given
//cehck console log for proper performance
describe('Note Module', () => {

  it.skip('Check for command?', () => {
    //what needs to be true for execute to work
    // const spyWare = jest.spyOn(console, 'log');
    let options = new Input();
    let note = new Note();
    expect(console.log).toHaveBeenCalledWith(`Adding Note: ${options.payload}`);
})
  it.skip('Check for note inside list after delete', () => {
    let options = new Input();
    let note = new Note();
    let command = options.parse({ add: 'new note' });
    //fake insert note, then delete it, and check inside list for life

  })

})