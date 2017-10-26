const sprite = require('../src/mixins/sprite.js');

test('sprite @mixin should return all sprite modifiers', () => {
  expect(sprite(null, 'flag')).toMatchSnapshot();
});
