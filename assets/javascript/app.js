$(document).ready(function () {

  let intervalID;

  function run() {
    let number = 15;
    intervalID = setInterval(decrement, 1000);
    $("header2").hide(0);

    function decrement() {
      number--;
      $("#show-number").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
      }
    }
  }

  window.onload = run();

  function stop() {
    clearInterval(intervalID);
    //display results
  }

  $("#submit").on("click", function(event) {
    event.preventDefault();
    $("header1").hide();
  })
  
  // $("#submit").on("click", function(){
  //   $("header").hide();
  // })
  


  correctAnswers = [2, 1, 4, 3, 1, 4, 1, 3, 2]

  //const radioValue = $("input[name='question1']:checked)".val();
  // function check(){
  // }

  const radioValue = $("input[name='question1']:checked").val();
  //const radioValue = $("input[type='radio'][name='question1']:checked").val();
  //const radioValue = document.getElementsByName("question1").value;

  console.log(radioValue);
});