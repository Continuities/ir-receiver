const KEY_DELAY = 1000; // in ms

module.exports = callback => {
  let timer = null;
  let current = 0;
  const cb = () => {
    callback(current);
    current = 0;
  };
  return input => {
    if (timer) { clearTimeout(timer); }
    timer = setTimeout(cb, KEY_DELAY);
    current = (current * 10) + input;
    console.log(`[channel parser] received input ${input} making ${current}`);
  };
};