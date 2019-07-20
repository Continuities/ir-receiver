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
  '4DE74847': Button.CHANNELUP,
  'B8781EF': Button.CHANNELDOWN,
  'F7283C77': Button.ONE,
  '757FB4DF': Button.TWO,
  'B33B4597': Button.THREE,
  '3C03E507': Button.FOUR,
  'E705551F': Button.FIVE,
  'A4A58EC7': Button.SIX,
  'E2E45F7F': Button.SEVEN,
  '6BACFEEF': Button.EIGHT,
  'E88E91F': Button.NINE,
  '7D168BCF': Button.ZERO
};

module.exports = {
  Button,
  decode: k => codeMap[k]
};