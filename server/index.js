#!/usr/local/bin/node

const { Button, decode } = require('./buttons.js');
const { test, channelUp, channelDown } = require('./video-controller.js');
const debounce = require('./debounce.js');
const { listener, mock } = require('./port-listener.js');

const listen = mock('BE3BB37', 100);
// const listen = listener;

listen(debounce(data => {
  switch (decode(data)) {
    case Button.CHANNELUP: 
      return channelUp();
    case Button.CHANNELDOWN:
      return channelDown();
  }
}, 100));

test();