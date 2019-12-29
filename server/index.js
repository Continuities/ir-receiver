#!/usr/local/bin/node

const { Button, decode } = require('./buttons.js');
const { test, channelUp, channelDown, setChannel } = require('./video-controller.js');
const debounce = require('./debounce.js');
const { listener, mock } = require('./port-listener.js');
const channelParser = require('./channel-parser.js');

const DEBOUNCE_DELAY = 300;

// const listen = mock('F7283C77', 10, 3);
const listen = listener;
const parseInput = channelParser(setChannel);

// Hook up IR control
listen(debounce(data => {
  console.log(`[sensor] received ${data}`)
  switch (decode(data)) {
    case Button.CHANNELUP: 
      return channelUp();
    case Button.CHANNELDOWN:
      return channelDown();
    case Button.ONE:
      return parseInput(1);
    case Button.TWO:
      return parseInput(2);
    case Button.THREE:
      return parseInput(3);
    case Button.FOUR:
      return parseInput(4);
    case Button.FIVE:
      return parseInput(5);
    case Button.SIX:
      return parseInput(6);
    case Button.SEVEN:
      return parseInput(7);
    case Button.EIGHT:
      return parseInput(8);
    case Button.NINE:
      return parseInput(9);
    case Button.ZERO:
      return parseInput(0);
  }
}, DEBOUNCE_DELAY));

// Start the thing
setChannel(1);