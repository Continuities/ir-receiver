const { device, baud } = require('./config.js');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

function listener(handler) {
  const port = new SerialPort(device, { baudRate: baud });
  const parser = port.pipe(new Readline({ delimiter: '\n' }));
  port.on("open", () => console.log('serial port open'));
  parser.on('data', handler);
}

function mock(data, delay) {
  return handler => {
    setInterval(() => {
      handler(data);
    }, delay);
  };
}

module.exports = {
  listener,
  mock
};