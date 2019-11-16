$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var score = 0;
  var randomGoal;
  var redGem;
  var yellowGem;
  var blueGem;
  var greenGem;
  // set up initial variables
  function getRandomNumber(minNumber, maxNumber) {
    var randomNumber = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    );
    return randomNumber;
  }
  function init() {
    score = 0;
    randomGoal = getRandomNumber(19, 120);
    $("#goal").html(randomGoal);
    console.log(randomGoal);
    redGem = getRandomNumber(1, 12);
    console.log("RED: " + redGem);
    yellowGem = getRandomNumber(1, 12);
    console.log("yellow: " + yellowGem);
    blueGem = getRandomNumber(1, 12);
    console.log("blue: " + blueGem);
    greenGem = getRandomNumber(1, 12);
    console.log("green: " + greenGem);
    // if
  }
  init();
  function compare() {
    if (score > randomGoal) {
      losses++;
      console.log(losses);
      $("#words").html("You Lost!");
      $("#losses").html("Losses: " + losses);
      init();
    } else if (score == randomGoal) {
      wins++;
      console.log(wins);
      $("#words").html("You Win!");
      $("#wins").html("Wins: " + wins);
      init();
    } else {
      console.log("continue");
    }
  }
  $("#red").click(function(event) {
    score = score + redGem;
    $("#score").html(score);
    console.log(score);
    compare();
  });
  $("#yellow").click(function(event) {
    score = score + yellowGem;
    $("#score").html(score);
    console.log(score);
    compare();
  });
  $("#blue").click(function(event) {
    score = score + blueGem;
    $("#score").html(score);
    console.log(score);
    compare();
  });
  $("#green").click(function(event) {
    score = score + greenGem;
    $("#score").html(score);
    console.log(score);
    compare();
  });
});
