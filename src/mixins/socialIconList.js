const socialNetworks = require('../data/socialNetworks.js');
const socialColors = require('../data/socialColors.js');

module.exports = () => {
    const css = {};

    socialNetworks.map((social) => {
        const color = socialColors[social.name];

        css[`.link--${social.name}:hover`] = {
            boxShadow: color ? `3px 3px 0 ${color}` : null,

            '.link-icon': {
                'color': color || null,
            }
        };
    });

    return css;
};
