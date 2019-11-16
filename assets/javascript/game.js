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
  var gems = [];
  // function to get a random number
  function getRandomNumber(minNumber, maxNumber) {
    var randomNumber = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    );
    return randomNumber;
  }
  // choose another number if any two of the gems are given the same number
  function getGemsValues(gemNum, minNumber, maxNumber) {
    var randomNum = getRandomNumber(minNumber, maxNumber);
    for (var i = 0; i < gemNum; i++) {
      while (gems.includes(randomNum)) {
        randomNum = getRandomNumber(minNumber, maxNumber);
      }
      gems.push(randomNum);
    }
  }
  // getGemsValues(4, 1, 12);

  // give random numbers to game goal and each gem
  function init() {
    score = 0;
    randomGoal = getRandomNumber(19, 120);
    $("#goal").html(randomGoal);
    console.log(randomGoal);
    getGemsValues(4, 1, 12);
    redGem = gems[0];
    console.log("RED: " + redGem);
    yellowGem = gems[1];
    console.log("yellow: " + yellowGem);
    blueGem = gems[2];
    console.log("blue: " + blueGem);
    greenGem = gems[3];
    console.log("green: " + greenGem);
  }
  init();
  // function to compare total score and goal to decide if the player win
  function compare() {
    if (score > randomGoal) {
      losses++;
      $("#words").html("You Lost!");
      $("#losses").html("Losses: " + losses);
      init();
    } else if (score == randomGoal) {
      wins++;
      $("#words").html("You Win!");
      $("#wins").html("Wins: " + wins);
      init();
    } else {
      return;
    }
  }
  // add points to total score when gems are clicked
  function addScore(gemPoints) {
    score = score + gemPoints;
    $("#score").html(score);
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
