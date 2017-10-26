const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-mixins')({
            mixinsDir: path.join(__dirname, '../src/mixins'),
        }),
        require('postcss-nested'),
        require('postcss-cssnext')({
            features: { rem: false },
        }),
        require('postcss-short-size'),
    ]
};
