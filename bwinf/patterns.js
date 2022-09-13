function getPattern(sudoku){
    let newsudoku = new Array();
    for (let i = 0; i < 9; i++) {
        let newrow = new Array();
        for (let k = 0; k < 9; k++) {
            if (sudoku[i][k] != 0) {
                newrow.push(1);
            } else{
                newrow.push(0);
            }
        }
        newsudoku.push(newrow);
    }
    console.log(newsudoku);
    return newsudoku;
}
function patternMatched(input, output){
    if(JSON.stringify(getPattern(input)) == JSON.stringify(getPattern(output))){
        return true;
    }
    return false;
}

function getAmountOfDigits(sudoku){
    let amount = [0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            amount[sudoku[i][k]] +=1;
        }
    }
    console.log(amount);
    return amount;
}

function compareDigits(amount1, amount2) {
    let sameNums = new Object();
    let used = [];
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            if (amount1[i] == amount2[k]) {
                if (amount1[i] == amount2[i]) {
                    if (!used.includes(i)) {
                        sameNums[i] = i;
                        i++;
                        k = -1;
                        console.log("GAVE " + i + ":" + i);
                        used.push(i);
                    }
                } else {
                    for (let j = 0; j < 10; j++) {
                        if (amount1[i] == amount2[j]) {
                            if (!used.includes(j)) {
                                sameNums[i] = j;
                                i++;
                                k = -1;
                                console.log("GAVE " + i + ":" + j);
                                used.push(j);
                            }
                        }
                    }
                }
            }
        }
    }
    if (sameNums.length != 10) {
        pushResult("Invalid input");
    }
    console.log("compareDigits OUTPUT log");

    console.log(sameNums);
    return sameNums;
}

function changeDigits(sameNums, sudoku) {
    let sudokunew = [];
    let changed = [];
    for (let i = 0; i < 9; i++) {
        let row = [];
        for (let k = 0; k < 9; k++) {
            if(sameNums[sudoku[i][k]] != sudoku[i][k]){
                changed.push([i,k]);
            }
            row.push(sameNums[sudoku[i][k]]);
        }
        sudokunew.push(row);
    }
    console.log("changeDigits log:");
    console.log(sudokunew);
    return [sudokunew, changed];
}

function checkPossible(sudokuin, digit){
    let amountrows = [];
    sudokuin.forEach(row => {
        let amount = 0;
        row.forEach(element => {
            if(element == digit){
                amount++;
            }
        });
        amountrows.push(amount);
    });

    sudoku = getBlocks(sudokuin);
    let amountblocks = [];
    sudoku.forEach(row => {
        let amount = 0;
        row.forEach(element => {
            if(element == digit){
                amount++;
            }
        });
        amountblocks.push(amount);
    });

    sudoku = getSudokuByColumns(sudokuin);
    let amountcolumns = [];
    sudoku.forEach(row => {
        let amount = 0;
        row.forEach(element => {
            if(element == digit){
                amount++;
            }
        });
        amountcolumns.push(amount);
    });

}        