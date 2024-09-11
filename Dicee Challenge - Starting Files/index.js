function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function updatePlayerImageByValue(val, player){
    switch(val)
    {
        case 1:
            player.setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            player.setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            player.setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            player.setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            player.setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            player.setAttribute("src", "./images/dice6.png");
            break;
        default:
            player.setAttribute("src", "./images/dice1.png");
            break;
    }
}
var headerH1 = document.querySelector("h1");
function checkAndDisplayWinner(val1, val2)
{
    if(val1 > val2)
    {
        headerH1.innerText = "Player1 Wins!";
    }
    else if(val2 > val1)
    {
        headerH1.innerText = "Player2 Wins!";
    }
    else
    {
        headerH1.innerText = "It's ATAY!!!";
    }
}

var playerOneRandomValue = getRndInteger(1,6);
var playerTwoRandomValue = getRndInteger(1,6);
var playerOneImage = document.getElementsByClassName("img1")[0];
var playerTwoImage = document.getElementsByClassName("img2")[0];

// console.log(playerOneStartingImage);
// console.log(playerTwoStartingImage);


updatePlayerImageByValue(playerOneRandomValue, playerOneImage);
updatePlayerImageByValue(playerTwoRandomValue, playerTwoImage);
checkAndDisplayWinner(playerOneRandomValue, playerTwoRandomValue);
// headerH1.innerText("MIMIM");
