const { socket } = require('./config.js');
const { exec } = require('child_process');

function tell_vlc(command) {
  return syscall(`echo "${command}" | nc -U ${socket}`);
}

function syscall(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      //console.log(command + ':: ' + stdout);
      resolve(stdout);
    });
  });
}

function play(file) {
  return tell_vlc(`clear\r\nadd ${file}`);
}

function seek(time) {
  return tell_vlc(`seek ${time}`);
}

let currentChannel = 1;

module.exports = {
  test: () => {
    play('/Users/michael/Workspace/ir-receiver/server/sample.mp4');
    seek(1.5);
  },
  channelUp: () => { console.log('Channel up'); },
  channelDown: () => { console.log('Channel down'); },
  setChannel: channel => { console.log(`Set channel ${channel}`); }
};