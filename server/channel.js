const path = require('path');
// const dir = path.dirname(require.main.filename);
const dir = '/Volumes/Firefly/Channel\ Surfing'

module.exports = [
  'Channel001.mp4',
  'Channel002.mp4',
  'Channel003.mp4',
  'Channel004.mp4',
  'Channel005.mp4',
  'Channel007.mp4',
  'Channel008.mp4'
].map(c => path.join(dir, c));