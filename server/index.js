#!/usr/local/bin/node

const { Button, decode } = require('./buttons.js');
const { test, channelUp, channelDown, setChannel } = require('./video-controller.js');
const debounce = require('./debounce.js');
const { listener, mock } = require('./port-listener.js');

const DEBOUNCE_DELAY = 300;

// const listen = mock('4DE74847', 1000);
const listen = listener;

// Hook up IR control
listen(debounce(data => {
  console.log(`[sensor] received ${data}`)
  switch (decode(data)) {
    case Button.CHANNELUP: 
      return channelUp();
    case Button.CHANNELDOWN:
      return channelDown();
    case Button.ONE:
      return setChannel(1);
    case Button.TWO:
      return setChannel(2);
    case Button.THREE:
      return setChannel(3);
    case Button.FOUR:
      return setChannel(4);
    case Button.FIVE:
      return setChannel(5);
    case Button.SIX:
      return setChannel(6);
    case Button.SEVEN:
      return setChannel(7);
    case Button.EIGHT:
      return setChannel(8);
    case Button.NINE:
      return setChannel(9);
    case Button.ZERO:
      return setChannel(0);
  }
}, DEBOUNCE_DELAY));

// Start the thing
setChannel(0);