console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameoverMusic = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn == "X" ? "O" : "X";
}

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText === boxtext[e[2]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won !";
            gameover = true;
            gameoverMusic.play();
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "30vw";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", (e) => {
        if (gameover == false && boxtext.innerText == "") {
            boxtext.innerText = turn
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (gameover == false) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
});

//Add onclick listener to reset button
let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        gameover = false
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
        document.querySelector(".line").style.transform = `translate(0vw, 0vw) rotate(0deg)`;
        document.querySelector(".line").style.width = "0vw";
        
    })
})