const countDown = () => {
    const countDate = new Date('May 29, 2022 00:00:00').getTime(); //WRITE HERE THE GOAL DATE; FORMAT: 'MONTH DAY, YEAR HOUR:MINUTE:SECOND'
    const now = new Date().getTime();
    const gap = countDate - now;


    //TIME WORKS - CALCULATED BY MILLISECONDS (1 SECOND 1000 MILLISECOND)
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //CALCULATE DAY, HOUR, MINUTE, SECOND
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //UPDATE HTML
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

//REFRESH COUNTDOWN
setInterval(countDown, 1000);

