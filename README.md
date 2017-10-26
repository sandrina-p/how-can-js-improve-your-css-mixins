# How can Javascript improve your CSS Mixins

## [Slides from Talk at JSConf Budapest](https://docs.google.com/presentation/d/19v8jkgS_0F7DrGw-8SzHktzy7nkC9W9XCNDqeXzB2wg/edit?usp=sharing)

This repo is an extension of the original talk where I share more examples about CSS Mixins.

- Basic examples:
  - Size: [Mixin w/JS](/src/mixins/size.js) - [Unit Test](/tests/size.test.js) - [Usage](/src/index.css#L92)
  - SocialIconList: [Mixin w/JS](/src/mixins/socialIconList.js) - [Unit Test](/tests/socialIconList.test.js) - [Usage](/src/index.css#L75)

- Not so basic dummy example:
  - Sprite: [SCSS Mixin](https://codepen.io/sandrina-p/pen/yowbwg) - [Mixin w/JS](/src/mixins/sprite.js) - [Unit Test](/tests/sprite.test.js) - [Usage](/src/index.css#L80)

- Other Examples:
  - With content inside the mixin - [CSS Mixin](/src/index.css#L105) - [Mixin w/JS](/src/mixins/isAndroid.js) - [Unit Test](/tests/isAndroid.test.js) - [Usage](/src/index.css#L118)
  - [Usage with Glamorous](https://codepen.io/sandrina-p/pen/gGBLej)
  - [Usage with Styled Components](https://codepen.io/sandrina-p/pen/gGqzqO)


## In case you want to see it in action: 💥

- Clone this repo and open your terminal:
- `cd path/to/how-can-js-improve-your-css-mixins`
- `npm install`
- `npm start`
- Go to [//localhost:3001](http://localhost:3001/)


## To get started with PostCSS: ⚡️
- [PostCSS](https://github.com/postcss/postcss)

### Create a Plugin
- [PostCSS API](http://api.postcss.org/)
- [PostCSS plugin boilerplate](https://github.com/postcss/postcss-plugin-boilerplate)
- [PostCSS Guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md)

### Cool PostCSS Plugins
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnext](http://cssnext.io/)
- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-short](https://github.com/jonathantneal/postcss-short)
- [cssnano](http://cssnano.co/)
- [rtlcss](https://github.com/MohammadYounes/rtlcss)

Thank you and have fun! 🙌

---

###### - [Slides presented at PixelsCamp](https://docs.google.com/presentation/d/1-weEYkLnfroTaSw4Zhh9oNKcso7ZrC6R6iczH4xeHc8/edit?usp=sharing)
