module.exports.extend = function(extend, base) {
  Object.keys(base).forEach(_ => {
    extend[_] = base[_];
  });
};
