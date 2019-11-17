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
    var evenNumFlag = [];
    for (var i = 0; i < gemNum; i++) {
      while (gems.includes(randomNum)) {
        randomNum = getRandomNumber(minNumber, maxNumber);
      }
      if (randomNum % 2 !== 0) {
        evenNumFlag.push(false);
      } else {
        evenNumFlag.push(true);
      }
      console.log(evenNumFlag);
      gems.push(randomNum);
    }
    // if all 4 gems are stand for even numbers, and the goal is a odd number. The player can never win.
    // to prevent this, when all 4 gem points are even numbers, the first one will be changed to an odd number.
    if (evenNumFlag.indexOf(false) === -1) {
      while (gems[0] % 2 === 0) {
        gems[0] = getRandomNumber(minNumber, maxNumber);
      }
      console.log(gems[0]);
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
