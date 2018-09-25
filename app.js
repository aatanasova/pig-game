/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores, roundScore, activePlayer, gamePlaying;

// init();

// // document.querySelector('#current-' + activePlayer).textContent = dice
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>'


// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if(gamePlaying) {
//         var dice = Math.floor(Math.random() * 6) + 1;
//         var diceDom=document.querySelector('.dice');
//         diceDom.style.display = 'block';
//         diceDom.src = 'dice-' + dice + '.png';
    
//         if (dice !== 1){
//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;
//         } else {
//             nextPlayer();
//         }
//     }
// });

// document.querySelector('.btn-hold').addEventListener('click', function(){
//     if (gamePlaying){
//         scores[activePlayer] += roundScore; 

//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
//         if(scores[activePlayer] >= 20) {
//             document.querySelector('#name-' + activePlayer).textContent='Winner';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         } else {
//             nextPlayer();
//         }
//     }
// })

// document.querySelector('.btn-new').addEventListener('click', init);

// function init(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;

//     document.querySelector('.dice').style.display= 'none'

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-1').textContent = '0'; 


//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';

//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');

//     document.querySelector('.player-0-panel').classList.add('active');




// }

// function nextPlayer() {
//     if(activePlayer === 0) {
//         activePlayer = 1;
//     } else {
//         activePlayer = 0;
//     }
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';
// }

var scores, roundScore, activePlayer, gamePlaying, dice1, winnerPoints;

init();

// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>'


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        var dice1Dom=document.querySelector('.dice1');
        dice1Dom.style.display = 'block';
        dice1Dom.src = 'dice-' + dice1 + '.png';

        dice2 = Math.floor(Math.random() * 6) + 1;
        var dice2Dom=document.querySelector('.dice2');
        dice2Dom.style.display = 'block';
        dice2Dom.src = 'dice-' + dice2 + '.png';

        
    
        if (dice1 !== 1 && dice2 !== 1){
            var dice = dice1+dice2
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        // diceArray.push(dice);
        // for(var i=0; i<diceArray.length-1; i++){
        //     console.log('isti',diceArray[i],diceArray[i+1])
        //     if(diceArray[i] == 6 && diceArray[i+1] == 6){
        //         document.querySelector('#score-' + activePlayer).textContent = 0;
        //         document.querySelector('#current-' + activePlayer).textContent = 0;
        //         // nextPlayer();
        //     }
        // }
    }


    console.log(dice1,dice2)
});






document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        scores[activePlayer] += roundScore; 

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    
        if(scores[activePlayer] >= winnerPoints) {
            document.querySelector('#name-' + activePlayer).textContent='Winner';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('#setPoints').addEventListener('change', function(){
    winnerPoints = document.getElementById('setPoints').value;
    console.log(winnerPoints)
});

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice1 = 0;
    dice2 = 0;
    gamePlaying = true;
    winnerPoints = 100;
    numberClick = 0;
    diceArray = [];

    document.querySelector('.dice1').style.display= 'none';
    document.querySelector('.dice2').style.display= 'none';
   

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0'; 


    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');




}

function nextPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display= 'none';

}

