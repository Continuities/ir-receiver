module.exports = require('yargs')
  .usage('$0 [args]')
  .option('device', {
    alias: 'd',
    default: '/dev/cu.usbmodem14201'
  })
  .option('baud', {
    alias: 'b',
    default: 9600
  })
  .option('socket', {
    alias: 's',
    default: '/Users/michael/vlc.sock'
  })
  .argv;