import { Countdown } from './countdown.js';
import { Playlist } from './playlist.js';

(async function() {
    const ws = await connectToServer();
    ws.onmessage = function(event) {
        var msg = JSON.parse(event.data);
      
        switch(msg.type) {
          case "init":
            Playlist.init(msg.index, msg.playlist);
            Countdown.start(msg.timeLeft);
            break;
          case "start":
            Playlist.change(msg.index);
            Countdown.start(13 * 60 * 1000 + 37 * 1000);
            break;
          case "stop":
            Countdown.stop();
            break;
        }
    };

    async function connectToServer() {
        const ws = new WebSocket('https://tmuf-status-handler.herokuapp.com:7071/ws');
        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {
                if(ws.readyState === 1) {
                    clearInterval(timer)
                    resolve(ws);
                }
            }, 10);
        });
    }
})();