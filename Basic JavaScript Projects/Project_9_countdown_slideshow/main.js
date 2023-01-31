function countDown()
{ var seconds = document.getElementById("seconds").value;

     function tick()
     {
        seconds = seconds -1;
        timer.innerHTMl = seconds;
        var time = setTimeout(tick, 1000);
        if (time==-1)
        {
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTMl="";
        }
     }
     tick();
}