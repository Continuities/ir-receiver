const Button = {
  CHANNELUP: 100,
  CHANNELDOWN: 101,
  ONE: 102,
  TWO: 103,
  THREE: 104,
  FOUR: 105,
  FIVE: 106,
  SIX: 107,
  SEVEN: 108,
  EIGHT: 109,
  NINE: 110,
  ZERO: 111
};

const codeMap = {
  // TODO
  'BE3BB37': Button.CHANNELUP
};

module.exports = {
  Button,
  decode: key => codeMap[key]
};