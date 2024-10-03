const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 6 to equal 11', () => {
    expect(add(5, 6)).toBe(11);
});