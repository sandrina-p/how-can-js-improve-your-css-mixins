// Same Mixin with SCSS: https://codepen.io/sandrina-p/pen/yowbwg

const sprites = {
  flag: {
    frames: [
      ['gb', 'us', 'de', 'ca', 'pl', 'fr', 'ru', 'it'],
      ['es', 'pt', 'lu', 'sj', 'fi', 'dk', 'se', 'gr'],
      ['ie', 'cn', 'br', 'hu'],
    ],
    url: './media/sprites/flag.png',
    width: 72,
    height: 37,
    gap: 9,
  }
};

module.exports = (mixinNode, name) => {
  const sprite = sprites[name];
  const spriteCSS = getCommonCSS();

  sprite.frames.map((line, coordY) => line.map((frame, coordX) =>
      getFrameClass(frame, coordX, coordY)
  ));

  function getCommonCSS() {
    return {
      [`.${name}`]: {
        display: 'inline-block',
        width: sprite.width,
        height: sprite.height,
        'background-image': `url(${sprite.url})`,
      }
    };
  }

  function getFrameClass(frame, x, y) {
    const posX = -(sprite.width + sprite.gap) * x;
    const posY = -(sprite.height + sprite.gap) * y;

    return spriteCSS[`.${name}--${frame}`] = {
      'background-position': `${posX}px ${posY}px`,
    }
  }

  return spriteCSS;
}
