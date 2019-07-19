# IR-controlled channel thingy
## How-to
1. Plug the Arduino into USB
2. Install the sketch on the Arduino
3. Install VLC (on OSX, `brew cask install vlc`)
4. In VLC settings:
   1. Show All
   2. interface
   3. Main Interfaces
   4. check Remote control interface
   5. RC
   6. check Fake TTY
   7. Set UNIX socket command input to something (ex: `/Users/michael/vlc.sock`)
5. `cd server`
6. `yarn install`
7. Start VLC
8. `yarn start` to run the thing