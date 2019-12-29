const path = require('path');
const dir = `${path.dirname(require.main.filename)}/channels`;
// const dir = '/Volumes/Firefly/Channel\ Surfing'

const regular = [
  'Channel001.mp4',
  'Channel002.mp4',
  'Channel003.mp4',
  'Channel004.mp4',
  'Channel005.mp4',
  'Channel006.mp4',
  'Channel007.mp4',
  'Channel008.mp4',
  'Channel009.mp4',
  'Channel010.mp4',
  'Channel011.mp4',
  'Channel012.mp4',
  'Channel013.mp4',
  'Channel014.mp4',
  'Channel015.mp4',
  'Channel016.mp4',
  'Channel017.mp4',
  'Channel018.mp4',
  'Channel019.mp4',
  'Channel020.mp4',
].map(c => path.join(dir, c));

const secret = {
  '0': path.join(dir, 'Channel000.mp4'),
  '69': path.join(dir, 'Channel069.mp4'),
  '1337': path.join(dir, 'Channel1337.mp4'),
  '666': path.join(dir, 'Channel666.mp4')
};

module.exports = {
  regular,
  secret
};