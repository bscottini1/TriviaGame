$(document).ready(function () {
    let number = 5;
    let intervalID;
    function run() {
        function decrement() {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
        }
        intervalID = setInterval(decrement, 1000);
        }
    window.onload = run();
    
    if (number === 0) {
        stop();
    }
    function stop(){
    clearInterval(intervalID);
    }

 });