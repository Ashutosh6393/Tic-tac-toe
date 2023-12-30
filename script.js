
const block = document.querySelectorAll('.block');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const model = document.querySelector('.winner');
let dataMatrix = [[NaN, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]]
let player = true;
let chance = 0;


function addEvents() {
    for (let index = 0; index < block.length; index++) {
        block[index].addEventListener('click', clickHandler);
    }
}


function removeEvents() {
    for (let index = 0; index < block.length; index++) {
        block[index].removeEventListener('click', clickHandler);
    }
}



const checkWinner = () => {
    if (dataMatrix[0][0] === dataMatrix[1][0] && dataMatrix[1][0] === dataMatrix[2][0]) {
        return true;
    } else if (dataMatrix[0][1] === dataMatrix[1][1] && dataMatrix[1][1] === dataMatrix[2][1]) {
        return true;
    } else if (dataMatrix[0][2] === dataMatrix[1][2] && dataMatrix[1][2] === dataMatrix[2][2]) {
        return true;
    } else if (dataMatrix[0][0] === dataMatrix[0][1] && dataMatrix[0][0] === dataMatrix[0][2]) {
        return true;
    } else if (dataMatrix[1][0] === dataMatrix[1][1] && dataMatrix[1][0] === dataMatrix[1][2]) {
        return true;
    } else if (dataMatrix[2][0] === dataMatrix[2][1] && dataMatrix[2][0] === dataMatrix[2][2]) {
        return true;
    } else if (dataMatrix[0][0] === dataMatrix[1][1] && dataMatrix[0][0] === dataMatrix[2][2]) {
        return true;
    } else if (dataMatrix[0][2] === dataMatrix[1][1] && dataMatrix[0][0] === dataMatrix[2][0]) {
        return true;
    } else {
        return false;
    }
}


function clickHandler(event) {
   
    let blockNumber = Number(event.target.dataset.block);
    switch (blockNumber) {
        case 1:
            dataMatrix[0][0] = player;
            break;
        case 2:
            dataMatrix[0][1] = player;
            break;
        case 3:
            dataMatrix[0][2] = player;
            break;
        case 4:
            dataMatrix[1][0] = player;
            break;
        case 5:
            dataMatrix[1][1] = player;
            break;
        case 6:
            dataMatrix[1][2] = player;
            break;
        case 7:
            dataMatrix[2][0] = player;
            break;
        case 8:
            dataMatrix[2][1] = player;
            break;
        case 9:
            dataMatrix[2][2] = player;
            break;
        default:
            break;
    }

    if (player === true) {
        event.target.innerHTML = 'X';
        const winner = checkWinner();
        player1.classList.remove('active');
        player2.classList.add('active');
        chance++;
        player = false;
        if (winner) {
            removeEvents();
            model.innerHTML= '<h1>Hurray !!!</h1><p>Player 1 Wins</p>'
            model.classList.remove('hidden')
        }
        event.target.removeEventListener('click', clickHandler);

    } else {
        event.target.innerHTML = 'O';
        const winner = checkWinner();
        player2.classList.remove('active');
        player1.classList.add('active');
        chance++;
        player = true;
        if (winner) {
            removeEvents();
            model.innerHTML= '<h1>Hurray !!!</h1><p>Player 2 Wins</p>'
            model.classList.remove('hidden')
        }
        event.target.removeEventListener('click', clickHandler);

    }

    if (chance === 9 && !checkWinner()) {
        model.innerHTML= '<h1>Sorry !!!</h1><p>No one Wins</p>'
        model.classList.remove('hidden')
    }


}


addEvents();


