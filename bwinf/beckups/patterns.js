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

function getMoves(input, output){
    let moves=[];
    console.log(output);
    console.log(input);
    let used=[];
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            if(input[i][k] != 0){
                for (let j = 0; j < 9; j++) {
                    for (let r = 0; r < 9; r++) {
                        if(output[j][r] === input[i][k] && output[j][r] != 0 && !used.includes(j +""+r) && !used.includes(i +""+k) ){
                            moves.push([[i, k],[j, r]]);
                            used.push(j +""+r);
                            used.push(i +""+k);
                        }            
                    }
                }
            }            
        }
    }
    console.log(moves);
    return moves;
}

function checkIdenticalSudokus(sudoku1, sudoku2){
        for (let i = 0; i < 9; i++) {
            sudoku1[i].sort();
        }
        sudoku1.sort();
        for (let i = 0; i < 9; i++) {
            sudoku2[i].sort();
        }
        sudoku2.sort();
        sudoku12 = getBlocks(sudoku1);
        sudoku22 = getBlocks(sudoku1);
        if(JSON.stringify(sudoku12) == JSON.stringify(sudoku22)){
            return false;
        }
        return true;
}