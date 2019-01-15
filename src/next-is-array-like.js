(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isArrayLike = function(inObj) {
    return typeof inObj.length == 'number';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isArrayLike;
  }
})();
