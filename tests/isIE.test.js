import isIE from '../src/mixins/isIE.js';
import postcss from 'postcss';
import mixins from 'postcss-mixins';

function run(input, output, opts) {
    return postcss([ mixins({mixins: { isIE } }) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

test('isIE should return @mixin-contet', () => {
    expect(isIE()).toEqual({
        '.isIE &': { '@mixin-content': {} }
    });
});

test('isIE integration should return content inside it', () => {
    return run(
        '.foo { @mixin isIE { color: blue } }',
        '.foo { .isIE & { color: blue } }'
    );
});
