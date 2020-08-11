const Input = require('./lib/input.js');

test('proves taht tests are alive', () => {
  expect(true).toBe(true);
})

it('should do something', () => {
  const sum = 2 + 2;
  expect(sum).toBe(5);
})

test('parse should give us good command', () => {
  let input = Input();
  let command = input.parse({a: 'test'});
  expect(command.action).toBe('add');
})