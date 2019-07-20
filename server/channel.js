const path = require('path');
const dir = path.dirname(require.main.filename);

module.exports = [
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4',
  'sample.mp4'
].map(c => path.join(dir, 'channels', c));