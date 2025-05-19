let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startBtn.addEventListener('click', function () {
    if (!timer) {
        timer = true;
        stopWatch();
    }
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
function reset(){
    alert("Alert!The timer was reset ");
}
function stopWatch() {
    if (timer) {
        // Format values before increment
        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        count++;

        if (count === 100) {
            second++;
            count = 0;
        }

        if (second === 60) {
            minute++;
            second = 0;
        }

        if (minute === 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        setTimeout(stopWatch, 10);
    }
}
