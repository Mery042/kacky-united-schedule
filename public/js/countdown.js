export class Countdown {
    static timeinterval;

    static getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);

        return {
            total,
            minutes,
            seconds
        };
    };
    
    static initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');
        clock.style.display = 'inline-block';
        function updateClock() {
            const t = Countdown.getTimeRemaining(endtime);

            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
            clearInterval(Countdown.timeinterval);
            }
        }

        updateClock();
        this.timeinterval = setInterval(updateClock, 1000);
    };
    
    static start(duration) {
        const currentTime = Date.parse(new Date());
        const deadline = new Date(currentTime + duration);
        this.initializeClock('timeLeft', deadline);
    };

    static stop(){
        clearInterval(this.timeinterval);
        document.getElementById('timeLeft').style.display = 'none';
    };
  
};