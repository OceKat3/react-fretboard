Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};