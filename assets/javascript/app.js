$(document).ready(function () {

  let intervalID;

  function run() {
    let number = 130;
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
    alert("TIME'S UP!");
    $("header1").hide();
    $("div").hide();
    $("header2").show();
  }

  $("#submit").on("click", function(event) {
    event.preventDefault();
    $("header1").hide();
    $("div").hide();
    $("header2").show();
  })
  

  correctAnswers = [2, 1, 4, 3, 1, 4, 1, 3, 2]
  usersAnswers = [radioValue1, radioValue2, radioValue3, radioValue4, radioValue5, radioValue6, radioValue7, radioValue8, radioValue9, radioValue10]
  
  const radioValue1 = $("input[name='question1']:checked").val();
  const radioValue2 = $("input[name='question2']:checked").val();
  const radioValue3 = $("input[name='question3']:checked").val();
  const radioValue4 = $("input[name='question4']:checked").val();
  const radioValue5 = $("input[name='question5']:checked").val();
  const radioValue6 = $("input[name='question6']:checked").val();
  const radioValue7 = $("input[name='question7']:checked").val();
  const radioValue8 = $("input[name='question8']:checked").val();
  const radioValue9 = $("input[name='question9']:checked").val();
  const radioValue10 = $("input[name='question10']:checked").val();

  for (let i = 0; i < correctAnswers.length; i++);
  for (let j = 0; j < usersAnswers.length; j++);

  if (correctAnswers[i] === usersAnswers[j]){
    userCorrect++;
  }
  
  let userCorrect;

  const totalScore = (userCorrect/10)
  $("#totalScore").append(totalScore);

  // function check(){
  // }



  // const radioValue = $("input[name = question`${i}`]:checked").val();
  //   userAnswers.push(for (let i = 0; i < 10; i++){
  //   }


  // //const radioValue = $("input[type='radio'][name='question1']:checked").val();
  //const radioValue = document.getElementsByName("question1").value;

});