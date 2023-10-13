const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let second = 0;
let minute = 0;
let hours = 0;
let interval;

start.addEventListener('click', () => {
    interval = setInterval(() => {
        second += 1;

        if (second === 60) {
            second = 0;
            minute += 1;
            if (minute === 60) {
                minute = 0
                hours += 1;
                hour.innerHTML = hours

            }
            min.innerHTML = minute
        }
        sec.innerHTML = second;

    }, 1000)

    start.disabled = true
   
})


stop.addEventListener('click', () => {
    clearInterval(interval)
    start.disabled = false
})

reset.addEventListener('click', () => {
    clearInterval(interval)
    second = 0;
    sec.innerHTML = `0${0}`;
    min.innerHTML = `0${0}`;
    hour.innerHTML = `0${0}`;
    start.disabled = false
    
})




