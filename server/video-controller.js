const { socket } = require('./config.js');
const { exec } = require('child_process');
const channel = require('./channel.js');

/**

+----[ Remote control commands ]
|
| add XYZ  . . . . . . . . . . . . add XYZ to playlist
| enqueue XYZ  . . . . . . . . . queue XYZ to playlist
| playlist . . . . .  show items currently in playlist
| play . . . . . . . . . . . . . . . . . . play stream
| stop . . . . . . . . . . . . . . . . . . stop stream
| next . . . . . . . . . . . . . .  next playlist item
| prev . . . . . . . . . . . .  previous playlist item
| goto . . . . . . . . . . . . . .  goto item at index
| repeat [on|off] . . . .  toggle playlist item repeat
| loop [on|off] . . . . . . . . . toggle playlist loop
| random [on|off] . . . . . . .  toggle random jumping
| clear . . . . . . . . . . . . . . clear the playlist
| status . . . . . . . . . . . current playlist status
| title [X]  . . . . . . set/get title in current item
| title_n  . . . . . . . .  next title in current item
| title_p  . . . . . .  previous title in current item
| chapter [X]  . . . . set/get chapter in current item
| chapter_n  . . . . . .  next chapter in current item
| chapter_p  . . . .  previous chapter in current item
|
| seek X . . . seek in seconds, for instance `seek 12'
| pause  . . . . . . . . . . . . . . . .  toggle pause
| fastforward  . . . . . . . .  .  set to maximum rate
| rewind  . . . . . . . . . . . .  set to minimum rate
| faster . . . . . . . . . .  faster playing of stream
| slower . . . . . . . . . .  slower playing of stream
| normal . . . . . . . . . .  normal playing of stream
| f [on|off] . . . . . . . . . . . . toggle fullscreen
| info . . . . .  information about the current stream
| stats  . . . . . . . .  show statistical information
| get_time . . seconds elapsed since stream's beginning
| is_playing . . . .  1 if a stream plays, 0 otherwise
| get_title . . . . .  the title of the current stream
| get_length . . . .  the length of the current stream
|
| volume [X] . . . . . . . . . .  set/get audio volume
| volup [X]  . . . . . . .  raise audio volume X steps
| voldown [X]  . . . . . .  lower audio volume X steps
| adev [X] . . . . . . . . . . .  set/get audio device
| achan [X]. . . . . . . . . .  set/get audio channels
| atrack [X] . . . . . . . . . . . set/get audio track
| vtrack [X] . . . . . . . . . . . set/get video track
| vratio [X]  . . . . . . . set/get video aspect ratio
| vcrop [X]  . . . . . . . . . . .  set/get video crop
| vzoom [X]  . . . . . . . . . . .  set/get video zoom
| snapshot . . . . . . . . . . . . take video snapshot
| strack [X] . . . . . . . . . set/get subtitles track
| key [hotkey name] . . . . . .  simulate hotkey press
| menu . . [on|off|up|down|left|right|select] use menu

 */

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
  return tell_vlc(`clear\r\nf on\r\nadd ${file}`);
}

function seek(time) {
  return tell_vlc(`seek ${time}`);
}

let currentChannel = 0;

module.exports = {
  channelUp: () => {
    currentChannel = (currentChannel + 1) % 10;
    console.log(currentChannel);
    play(channel[currentChannel]);
  },
  channelDown: () => {
    currentChannel = currentChannel - 1;
    if (currentChannel < 0) {
      currentChannel += 10;
    }
    console.log(currentChannel);
    play(channel[currentChannel]);
  },
  setChannel: c => {
    currentChannel = c;
    play(channel[currentChannel]);
  }
};