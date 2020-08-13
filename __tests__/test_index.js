'use strict';

jest.mock('minimist');
const minimist = require('minimist');

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

// it('should do something', () => {
//   const sum = 2 + 2;
//   expect(sum).toBe(5);
// })

// test('parse should give us good command', () => {
//   let input = Input();
//   let command = input.parse({a: 'test'});
//   expect(command.action).toBe('add');
// })

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

  it.skip('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it.skip('valid() rejects an invalid object', () => {
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

// describe('Note Module', () => {
//   it('Check for command', () => {
    //what needs to be true for execute to work
// })
// })