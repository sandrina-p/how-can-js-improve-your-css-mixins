const socialIconsList = require('../src/mixins/socialIconList.js');

// Mock socialIconList.js dependencies
jest.mock('../src/data/socialNetworks.js', () => [
    { name: 'codepen' },
    { name: 'github' },
    { name: 'twitter' },
]);
jest.mock('../src/data/socialColors', () => ({
    codepen: '#e6e456',
    github: '#56bfe6',
}));


test('socialIconClassList returns a list of classes with their properties', () => {
    expect(socialIconsList()).toEqual({
        '.link--codepen:hover': {
            'boxShadow': '3px 3px 0 #e6e456',
            '.link-icon': {
                color: '#e6e456',
            },
        },
        '.link--github:hover': {
            'boxShadow': '3px 3px 0 #56bfe6',
            '.link-icon': {
                color: '#56bfe6',
            },
        },
        '.link--twitter:hover': {
            'boxShadow': null,
            '.link-icon': {
                'color': null,
            },
        },
    });
});
