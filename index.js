// objective: make different scratch off winnings (eg a $3 could have 3 winningNumbers in the numbers array that have a value of $1) 
// group scratch off numbers with random card amounts like [15, $5.00]


// let n = 3;
var rndNum = Math.random();
// produces a random number between 0-.99 to compare against winning probability
var rndNum_2 = Math.random();
// produces a random number between 0-.99 to compare against prize winning probability
var score = [];
// an array to show win or loss on the card


function getWinningCard(n) {
    if (rndNum <= 1 / n) {
        let prizeAmount;
        if (rndNum_2 <= 1 / 10) {
            score.push("Win");
            prizeAmount = "$10";
        }
        else if (rndNum_2 > 1 / 10 && rndNum_2 <= 3 / 10) {
            score.push("Win");
            prizeAmount = "$5";
        }
        else if (rndNum_2 > 3 / 10 && rndNum_2 <= 6 / 10) {
            score.push("Win");
            prizeAmount = "$3";
        }
        // this last else if is not needed. a else would sufficient but just showing the pr is 40% to win $2 on a winning card 
        else if (rndNum_2 > 6 / 10 && rndNum_2 <= 10 / 10) {
            score.push("Win");
            prizeAmount = "$2";
        }
        return ([score[0], prizeAmount]);
    }

    else {
        score.push("Loss")
        return (score[0]);
    }

}


console.log(getWinningCard(3))

// score = ["Win"];

var winningNumbers = [];
var numbers = [];

function makeCard() {
    // let pass3 = Math.random();
    // this while loop will generate the winningNumbers array
    let i = 0;
    while (winningNumbers.length < 4) {
        let rndInt = Math.floor(Math.random() * 50 + 1);
        if (Boolean(winningNumbers.includes(rndInt)) === false) {
            winningNumbers.push(rndInt);
            i++
        }
        else {
            i++
        }
    }

    if (score[0] === "Win") {
        // the while loop will generate numbers array to scratch off if it is a winning card
        let j = 0;
        while (numbers.length < 20) {
            let rndInt2 = Math.floor(Math.random() * 50 + 1);
            if (Boolean(numbers.includes(rndInt2)) === true) {
                j++
            }

            else if (Boolean(winningNumbers.includes(rndInt2)) === true) {
                j++
            }

            // if rndInt2 is in the numbers list or in the winningNumbers then move onto the next iteration
            else {
                numbers.push(rndInt2);
                j++

            }
        }
        let replace = Math.floor(Math.random() * numbers.length);
        // this will give a random index from the numbers array for an element from winningNumbers to replace 
        let select = Math.floor(Math.random() * winningNumbers.length);
        // this will give a random index from the winningNumbers array 
        numbers[replace] = winningNumbers[select];
    }
    else {
        // the while loop will generate numbers array to scratch off since it is not a winning card
        let j = 0;
        while (numbers.length < 20) {
            let rndInt2 = Math.floor(Math.random() * 50 + 1);
            if (Boolean(numbers.includes(rndInt2)) === true) {
                j++
            }

            else if (Boolean(winningNumbers.includes(rndInt2)) === true) {
                j++
            }

            // if rndInt2 is in the numbers list or in the winningNumbers then move onto the next iteration since this is a losing card
            else {
                numbers.push(rndInt2);
                j++

            }
        }

    }
    return ([winningNumbers, numbers]);
}


// makeCard(1);
console.log(makeCard());

// document.getElementById("winning-numbers").innerHTML = winningNumbers;
// document.getElementById("numbers").innerHTML = numbers;





