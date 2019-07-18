#!/usr/local/bin/node

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const Remote = require('vlc-remote');

const { device, baud, port, host } = require('yargs')
  .usage('$0 [args]')
  .option('device', {
    alias: 'd',
    default: '/dev/ttyACM0'
  })
  .option('baud', {
    alias: 'b',
    default: 9600
  })
  .option('host', {
    alias: 'h',
    default: '127.0.0.1'
  })
  .option('port', {
    alias: 'p',
    default: 8088
  })
  .argv;

const remote = new Remote(port, host);

remote.play('sample.mp4');
setTimeout(() => remote.play('sample.mp4'), 3000);

try {
  const port = new SerialPort(device, { baudRate: baud });
  const parser = port.pipe(new Readline({ delimiter: '\n' }));
  port.on("open", () => {
    console.log('serial port open');
  });
  parser.on('data', data =>{
    console.log('got word from arduino:', data);
  });
} catch(e) {
  // swallow for now
}