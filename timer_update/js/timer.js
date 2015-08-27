var future_date = Date.now();
//alert(future_date);
var minutes_offset = 5;
future_date = future_date + (minutes_offset * 60000);
//CountDownTimer('11/20/2016 03:23 PM', 'cdown_tmr');
CountDownTimer(future_date, 'cdown_tmr');
