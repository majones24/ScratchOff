// objective: make different scratch off winnings (eg a $3 could have 3 winningNumbers in the numbers array that have a value of $1) 
// group scratch off numbers with random card amounts like [15, $5.00]


let winningProbability = Math.random();
let prizeProbability = Math.random();
let score = [];
// an array to show win or loss on the card


function getWinningCard(n) {
    if (winningProbability <= 1 / n) {
        let prizeAmount;
        score.push("Win")
        if (prizeProbability <= 1 / 10) {
            prizeAmount = "$10";
        } else if (1 / 10 < prizeProbability <= 3 / 10) {
            prizeAmount = "$5";
        } else if (3 / 10 < prizeProbability <= 6 / 10) {
            prizeAmount = "$3";
        } else {
            prizeAmount = "$2";
        }
        return ([score[0], prizeAmount]);
    } else {
        score.push("Loss")
        return (score[0]);
    }

}

console.log(getWinningCard(3))

let winningNumbers = [];
let numbersOnCard = [];

function makeCard() {
    // this while loop will generate the winningNumbers array
    while (winningNumbers.length < 4) {
        let rndInt = Math.floor(Math.random() * 50 + 1);
        // rndInt could be changed 
        if (Boolean(winningNumbers.includes(rndInt)) === false) {
            winningNumbers.push(rndInt);
        }
    }

    if (score[0] === "Win") {
        // the while loop will generate numbers array to scratch off if it is a winning card
        while (numbersOnCard.length < 20) {
            let rndInt2 = Math.floor(Math.random() * 50 + 1);
            if (!Boolean(numbersOnCard.includes(rndInt2)) === true) {
                numbersOnCard.push(rndInt2);
            }
        }
        let replaceNumbersOnCard = Math.floor(Math.random() * numbersOnCard.length);
        // this will give a random index from the numbers array for an element from winningNumbers to replace 
        let selectWinningNumbers = Math.floor(Math.random() * winningNumbers.length);
        // this will give a random index from the winningNumbers array 
        numbersOnCard[replaceNumbersOnCard] = winningNumbers[selectWinningNumbers];
    }
    else {
        // the while loop will generate numbers array to scratch off since it is not a winning card
        while (numbersOnCard.length < 20) {
            let rndInt2 = Math.floor(Math.random() * 50 + 1);
            if (!Boolean(numbersOnCard.includes(rndInt2)) === true) {
                numbersOnCard.push(rndInt2);
            }
        }

    }
    return ([winningNumbers, numbersOnCard]);
}

console.log(makeCard());







