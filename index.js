var allignCenter = (function () {
'use strict';

var index = function (target) {
  
  target.style.margin = (((target.parentElement.offsetHeight - target.offsetHeight) / 2) | 0) + 'px auto';
  target.style.position = 'absolute';
};

return index;

}());
//# sourceMappingURL=index.js.map
