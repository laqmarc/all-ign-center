'use strict';

const allignCenter = target => {
  
  target.style.margin = (((target.parentElement.offsetHeight - target.offsetHeight) / 2) | 0) + 'px auto';
  target.style.position = 'absolute';
};

module.exports = allignCenter;
