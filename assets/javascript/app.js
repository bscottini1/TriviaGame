$(document).ready(function () {
    // let n = Date.now();
    // let x = n + (1000*60*2);
    // let timerSec = ((x-n)/1000);
    // let runTime = 
    // function decrement(){
    //     timerSec--;
    //     setInterval(decrement), 1000;
    // }
    // console.log(timerSec);
    let number = 120;
    let numRun= run
    let intervalID;
    function run() {
        function decrement() {
            number--;
        intervalID = setInterval(decrement, 1000);
    }
}
    $("#start").on("click", run);
    $("#show-number").html("<h2>" + number + "</h2>");

});