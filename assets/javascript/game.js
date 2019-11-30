var random = Math.floor(Math.random() * 100);
document.getElementById("score").innerHTML = random;

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
    beryl = 10;
    emerald = 1;
    sapphire = 5;
}