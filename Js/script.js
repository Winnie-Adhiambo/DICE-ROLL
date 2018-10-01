
$(document).ready(function(){
  var score = 0;
  $("#roll1").click(function roll1() {
    var playerOne = $("#playerone").val();
    var playerTwo = $("#playertwo").val();
    var roll = Math.floor(Math.random() * 6 + 1);
    

    score = score+roll
    alert(score)
     $('#list').text(score)
    playerone.innerHTML = playerOne;
    playertwo.innerHTML = playerTwo;
    var playerTotal = playerOne + playerTwo;
    if (playerOne == playerTwo)

    alert("players")

    roll2 = []
    roll2.append(rolls)
    result = sum(roll2)

  });
   var score = 0;
$("#roll2").click(function roll2 () {
  var playerOne = $("#playerone").val();
  var playerTwo = $("#playertwo").val();

  var rolls = Math.floor(Math.random() * 6 + 1);


  score = score+rolls
  alert(score)
  $('#list').text(score)

  playerone.innerHTML = playerOne;
  playertwo.innerHTML = playerTwo;
  var playerTotal = playerOne + playerTwo;
  if (playerOne == playerTwo)

  alert("players")

});
});













// $(document).ready(function(){
// $("#roll").submit(roll() {
//   alert('wow')
//   var playerOne = $("#playerone").val();
//   var playerTwo = $("#playertwo").val();
//   var playerOne = math.floor (math.random() * 20 + 1);
//   var playerTwo = math.floor (math.random() * 20 + 1);
//
//   playerone.innerHTML = playerOne;
//   playertwo.innerHTML = playerTwo;
//   var playerTotal = playerOne + playerTwo;
//   if (playerOne == playerTwo)
//
//   alert("players")
// });
//
//
//
// };
