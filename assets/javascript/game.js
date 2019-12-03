localStorage.clear();

var random = Math.floor(Math.random() * 100);
document.getElementById("score").innerHTML = random;
var userScore = document.querySelector("#user-score");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var rubyButton = document.querySelector("#ruby-button");
var berylButton = document.querySelector("#beryl-button");
var emeraldButton = document.querySelector("#emerald-button");
var sapphireButton = document.querySelector("#sapphire-button");

var count = localStorage.getItem("count");
userScore.textContent = 0;
userScore.textContent = count;

var winCount = localStorage.getItem("winCount");
wins.textContent = 0;
wins.textContent = winCount;

var lossCount = localStorage.getItem("lossCount");
losses.textContent = 0;
losses.textContent = lossCount;

var resultDisplay = document.querySelector("#result-display");
var newGame = document.querySelector("#new-game");
var reset = document.querySelector("#reset");

if (random < 4) {
    ruby = 0;
    beryl = 1;
    emerald = 5;
    sapphire = 10;
}

else if (random < 8 && random > 3) {
    ruby = 0;
    beryl = 1;
    emerald = 10;
    sapphire = 5;
}

else if (random < 12 && random > 7) {
    ruby = 0;
    beryl = 5;
    emerald = 1;
    sapphire = 10;
}

else if (random < 16 && random > 11){
    ruby = 0;
    beryl = 5;
    emerald = 10;
    sapphire = 1;
}

else if (random < 20 && random > 15){
    ruby = 0;
    beryl = 10;
    emerald = 1;
    sapphire = 5;
}

else if (random < 24 && random > 19){
    ruby = 0;
    beryl = 10;
    emerald = 5;
    sapphire = 1;
}

else if (random < 28 && random > 23){
    ruby = 1;
    beryl = 0;
    emerald = 5;
    sapphire = 10;
}

else if (random < 32 && random > 27){
    ruby = 1;
    beryl = 0;
    emerald = 10;
    sapphire = 5;
}

else if (random < 36 && random > 31){
    ruby = 1;
    beryl = 5;
    emerald = 0;
    sapphire = 10;
}

else if (random < 40 && random > 35){
    ruby = 1;
    beryl = 5;
    emerald = 10;
    sapphire = 0;
}

else if (random < 44 && random > 39){
    ruby = 1;
    beryl = 10;
    emerald = 0;
    sapphire = 5;
}

else if (random < 48 && random > 43){
    ruby = 1;
    beryl = 10;
    emerald = 5;
    sapphire = 0;
}

else if (random < 52 && random > 47){
    ruby = 5;
    beryl = 0;
    emerald = 1;
    sapphire = 10;
}

else if (random < 56 && random > 51){
    ruby = 5;
    beryl = 0;
    emerald = 10;
    sapphire = 1;
}

else if (random < 60 && random > 55){
    ruby = 5;
    beryl = 1;
    emerald = 0;
    sapphire = 10;
}

else if (random < 64 && random > 59){
    ruby = 5;
    beryl = 1;
    emerald = 10;
    sapphire = 0;
}

else if (random < 68 && random > 63){
    ruby = 5;
    beryl = 10;
    emerald = 0;
    sapphire = 1;
}

else if (random < 72 && random > 67){
    ruby = 5;
    beryl = 10;
    emerald = 1;
    sapphire = 0;
}

else if (random < 76 && random > 71){
    ruby = 10;
    beryl = 0;
    emerald = 1;
    sapphire = 5;
}

else if (random < 80 && random > 75){
    ruby = 10;
    beryl = 0;
    emerald = 5;
    sapphire = 1;
}

else if (random < 84 && random > 79){
    ruby = 10;
    beryl = 1;
    emerald = 0;
    sapphire = 5;
}

else if (random < 88 && random > 83){
    ruby = 10;
    beryl = 1;
    emerald = 5;
    sapphire = 0;
}

else if (random < 92 && random > 87){
    ruby = 10;
    beryl = 5;
    emerald = 0;
    sapphire = 1;
}

else if (random < 96 && random > 91){
    ruby = 10;
    beryl = 5;
    emerald = 1;
    sapphire = 0;
}

else if (random > 95){
    ruby = 15;
    beryl = 10;
    emerald = 1;
    sapphire = 5;
}

rubyButton.addEventListener("click", function() {
  count += ruby;
  userScore.textContent = count;

  localStorage.setItem("count", count);

  if (count < random){
    winCount += 0;
    wins.textContent = winCount;
    localStorage.setItem("winCount", winCount);
    lossCount += 0;
    losses.textContent = lossCount;
    localStorage.setItem("lossCount", lossCount);
}

else if (count == random){
    winCount++;
    wins.textContent = winCount;
    localStorage.setItem("winCount", winCount);
    $("#result-display").html("You won!");
}

else if (count > random){
    lossCount++;
    losses.textContent = lossCount;
    localStorage.setItem("lossCount", lossCount);
    $("#result-display").html("You lost!");
}
});

berylButton.addEventListener("click", function() {
  count += beryl;
  userScore.textContent = count;

  localStorage.setItem("count", count);

  if (count < random){
    winCount += 0;
    wins.textContent = winCount;
    localStorage.setItem("winCount", winCount);
    lossCount += 0;
    losses.textContent = lossCount;
    localStorage.setItem("lossCount", lossCount);
}

else if (count == random){
    winCount++;
    wins.textContent = winCount;
    localStorage.setItem("winCount", winCount);
    $("#result-display").html("You won!");
}

else if (count > random){
    lossCount++;
    losses.textContent = lossCount;
    localStorage.setItem("lossCount", lossCount);
    $("#result-display").html("You lost!");
}
});

emeraldButton.addEventListener("click", function() {
    count += emerald;
    userScore.textContent = count;
  
    localStorage.setItem("count", count);

    if (count < random){
        winCount += 0;
        wins.textContent = winCount;
        localStorage.setItem("winCount", winCount);
        lossCount += 0;
        losses.textContent = lossCount;
        localStorage.setItem("lossCount", lossCount);
    }
    
    else if (count == random){
        winCount++;
        wins.textContent = winCount;
        localStorage.setItem("winCount", winCount);
        $("#result-display").html("You won!");
    }
    
    else if (count > random){
        lossCount++;
        losses.textContent = lossCount;
        localStorage.setItem("lossCount", lossCount);
        $("#result-display").html("You lost!");
    }
  });

sapphireButton.addEventListener("click", function() {
    count += sapphire;
    userScore.textContent = count;
  
    localStorage.setItem("count", count);

    if (count < random){
        winCount += 0;
        wins.textContent = winCount;
        localStorage.setItem("winCount", winCount);
        lossCount += 0;
        losses.textContent = lossCount;
        localStorage.setItem("lossCount", lossCount);
    }
    
    else if (count == random){
        winCount++;
        wins.textContent = winCount;
        localStorage.setItem("winCount", winCount);
        $("#result-display").html("You won!");

    }
    
    else if (count > random){
        lossCount++;
        losses.textContent = lossCount;
        localStorage.setItem("lossCount", lossCount);
        $("#result-display").html("You lost!");
    }
  });

  newGame.addEventListener("click", function() {
      userScore = 0;
  });

reset.addEventListener("click", function(){
   localStorage.clear();
})