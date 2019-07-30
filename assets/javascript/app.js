$(document).ready(function () {
    
    let intervalID;

    function run() {
        let number = 5;
        intervalID = setInterval(decrement, 1000);

        function decrement() {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
            stop();
        }
      }
    }

    window.onload = run();
    
    function stop(){
    clearInterval(intervalID);
    }

 });