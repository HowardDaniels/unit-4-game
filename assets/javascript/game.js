var random = Math.floor(Math.random() * 100);
document.getElementById("score").innerHTML = random;
var userScore = 0;
document.getElementById("user-score").innerHTML = userScore;

var ruby = 0;
var beryl = 0;
var emerald = 0;
var sapphire = 0;

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