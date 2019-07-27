let  number = 120;

window.onload = function run (){
    interval = setInterval(decrement, 1000);
}

function decrement (){
    number--;
}

$("#show-number").html("<h2>" + number + "</h2");
// if number === {
//     alert (You ran out of time!);
// }




