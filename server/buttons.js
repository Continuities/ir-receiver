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

// Production remotes
const codeMap = {
  '3BC': Button.CHANNELUP,
  'BBC': Button.CHANNELUP,
  '391': Button.CHANNELDOWN,
  'B91': Button.CHANNELDOWN,
  '381': Button.ONE,
  'B81': Button.ONE,
  '382': Button.TWO,
  'B82': Button.TWO,
  '383': Button.THREE,
  'B83': Button.THREE,
  '384': Button.FOUR,
  'B84': Button.FOUR,
  '385': Button.FIVE,
  'B85': Button.FIVE,
  '386': Button.SIX,
  'B86': Button.SIX,
  '387': Button.SEVEN,
  'B87': Button.SEVEN,
  '388': Button.EIGHT,
  'B88': Button.EIGHT,
  '389': Button.NINE,
  'B89': Button.NINE,
  '380': Button.ZERO,
  'B80': Button.ZERO,
};

// Magill's remote
// const codeMap = {
//   'A0A09867': Button.CHANNELUP,
//   'A0A0A857': Button.CHANNELDOWN
// };

// My TV remote
// const codeMap = {
//   '4DE74847': Button.CHANNELUP,
//   'B8781EF': Button.CHANNELDOWN,
//   'F7283C77': Button.ONE,
//   '757FB4DF': Button.TWO,
//   'B33B4597': Button.THREE,
//   '3C03E507': Button.FOUR,
//   'E705551F': Button.FIVE,
//   'A4A58EC7': Button.SIX,
//   'E2E45F7F': Button.SEVEN,
//   '6BACFEEF': Button.EIGHT,
//   'E88E91F': Button.NINE,
//   '7D168BCF': Button.ZERO
// };

module.exports = {
  Button,
  decode: k => codeMap[k]
};