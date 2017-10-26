import size from '../src/mixins/size.js';

test('Size Mixin should return CSS rules', () => {
    expect(size(null, '64px')).toEqual({
        width: '64px',
        height: '64px',
    })
});
