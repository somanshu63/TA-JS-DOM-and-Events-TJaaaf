let dashboard = document.querySelector(".dashboard");
let marioGame = document.createElement("div");
let imageMario = document.createElement("img");
let h2Mario = document.createElement("h2");
let RPSGame = document.createElement("div");
let imageRPS = document.createElement("img");
let h2RPS = document.createElement("h2");
let Game2048 = document.createElement("div");
let image2048 = document.createElement("img");
let h22048 = document.createElement("h2");
let GameTictactoe = document.createElement("div");
let imageTictactoe = document.createElement("img");
let h2Tictactoe = document.createElement("h2");

imageMario.src = "assets/memorygame0628.jpg";
imageMario.alt = "Mario Game";
h2Mario.innerText = "Memory Game";
marioGame.append(imageMario, h2Mario);

imageRPS.src = "assets/rpS.png";
imageRPS.alt = "Rock Paper Scissor Game";
h2RPS.innerText = "R-P-S Game";
RPSGame.append(imageRPS, h2RPS);

image2048.src = "assets/2048.png";
image2048.alt = "2048 Game";
h22048.innerText = "2048 Game";
Game2048.append(image2048, h22048);

imageTictactoe.src = "assets/tictactoe.png";
imageTictactoe.alt = "Tic-tac-toe Game";
h2Tictactoe.innerText = "Tic-tac-toe Game";
GameTictactoe.append(imageTictactoe, h2Tictactoe);

dashboard.append(marioGame, Game2048, RPSGame, GameTictactoe);

marioGame.addEventListener("click", function() {
    window.open("indexMario.html");
});

RPSGame.addEventListener("click", function() {
    window.open("indexRPS.html");
});

Game2048.addEventListener("click", function() {
    window.open("index2048.html");
});

GameTictactoe.addEventListener("click", function() {
    window.open("indexTic-tac-toe.html");
});