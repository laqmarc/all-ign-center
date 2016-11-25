var allignCenter = (function () {
'use strict';

var allignCenter = function (target) {
  
  target.style.margin = (((target.parentElement.offsetHeight - target.offsetHeight) / 2) | 0) + 'px auto';
  target.style.position = 'absolute';
};

return allignCenter;

}());
//# sourceMappingURL=index.js.map
