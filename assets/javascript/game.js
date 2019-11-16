$(document).ready(function() {
  // set up global variables
  var wins = 0;
  var losses = 0;
  var score = 0;
  var randomGoal;
  var redGem;
  var yellowGem;
  var blueGem;
  var greenGem;
  // function to get a random number
  function getRandomNumber(minNumber, maxNumber) {
    var randomNumber = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    );
    return randomNumber;
  }
  // give random numbers to game goal and each gem
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
  // function to compare total score and goal to decide if the player win
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
  // add points to total score when gems are clicked
  function addScore(gemPoints) {
    score = score + gemPoints;
    $("#score").html(score);
    console.log(score);
  }
  $("#red").click(function(event) {
    addScore(redGem);
    compare();
  });
  $("#yellow").click(function(event) {
    addScore(yellowGem);
    compare();
  });
  $("#blue").click(function(event) {
    addScore(blueGem);
    compare();
  });
  $("#green").click(function(event) {
    addScore(greenGem);
    compare();
  });
});
