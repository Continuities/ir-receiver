module.exports = (fn, delay) => {
  let last = undefined;
  return (...args) => {
    if (Date.now() - last < delay) {
      return;
    }
    last = Date.now();
    fn(...args);
  };
};