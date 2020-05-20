let p1 = Symbol('player1');
let p2 = Symbol('player2');
let myScores = new Set();

getPlayerHand = () => {
    return Math.floor(Math.random() * Math.floor(3));
}

getWinner = (hand1, hand2) => {

    //0 rock,1 paper,2 scissor
    //0 1 = 1
    //0 2 = 0
    //1 2 = 2
    if (hand1 == hand2) {
        return 'tie';
    }
    else if (((hand1 == 0) || (hand2 == 0)) && ((hand1 == 1) || (hand2 == 1))) {
        return (hand1 == 1) ? 'p1' : 'p2';
    }
    else if (((hand1 == 0) || (hand2 == 0)) && ((hand1 == 2) || (hand2 == 2))) {
        return (hand1 == 0) ? 'p1' : 'p2';
    }
    else if (((hand1 == 1) || (hand2 == 1)) && ((hand1 == 2) || (hand2 == 2))) {
        return (hand1 == 2) ? 'p1' : 'p2';
    }

}

getHand = (x) => {
    switch (x) {
        case 0:
            return 'rock'
            break;

        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissor'
            break;
    }
}

const asyncCall = async () => {

    getScores = () => {
        return new Promise(resolved => {
            var p1Score = 0, p2Score = 0;
            var p1Hand, p2Hand;


            for (round = 1; round < 6; round++) {
                p1Hand = getPlayerHand();
                p2Hand = getPlayerHand();

                let x = getWinner(p1Hand, p2Hand);

                switch (x) {
                    case 'p1':
                        p1Score++;
                        break;
                    case 'p2':
                        p2Score++;
                        break;
                }

                myScores.add({ p1: { score: p1Score, hand: getHand(p1Hand) }, p2: { score: p2Score, hand: getHand(p2Hand) } });

            }

            let finalScore = Array.from(myScores).pop();

            let gameDetails = {
                scores: myScores,
                winner: (finalScore['p1'].score != finalScore['p2'].score) ? ((finalScore['p1'].score > finalScore['p2'].score) ? 'Player 1' : 'Player 2') : 'It\'s a tie'
            }

            resolved(gameDetails);

        });
    }


    getScores().then(async result => {
        var text = '';

        for (let round of result.scores) {
            console.log(round['p1'].hand);
            console.log(round['p2'].hand);

            text += `Player 1 ${round['p1'].hand} \nPlayer 2 ${round['p2'].hand} \n\n`;

        }

        text += 'Winner: ' + result.winner;
        document.getElementById("results").innerText = text;

        console.log('Winner: ' + result.winner);
    })


}


//asyncCall();

let startGame = () => {
    asyncCall();
}
