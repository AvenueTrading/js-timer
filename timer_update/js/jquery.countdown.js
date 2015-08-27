function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _milisecond = 10;
	var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = '00:00:00';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        var miliseconds = Math.round((distance % _second) / _milisecond);
		
		minutes = "" + minutes;
		seconds = "" + seconds;
		var pad = "00";
		minutes = pad.substring(0, pad.length - minutes.length) + minutes;
		seconds = pad.substring(0, pad.length - seconds.length) + seconds;
		
        document.getElementById(id).innerHTML = minutes + ':';
        document.getElementById(id).innerHTML += seconds + ':';
        document.getElementById(id).innerHTML += miliseconds + '';
    }
    timer = setInterval(showRemaining, 1);
}
