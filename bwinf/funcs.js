//generates the two html sudoku tables + inputs
document.addEventListener("DOMContentLoaded", function () {
    const sudokus = document.getElementById("sudokus");
    for (let j = 1; j < 3; j++) {
        let toappendfinal = '<div class="sudoku"><table>';
        for (let i = 1; i < 10; i++) {
            let toappend = '<tr>';
            toappendfinal += toappend;
            for (let k = 1; k < 10; k++) {
                toappend = '<td><input type="text"  id="' + j + '-' + i + '-' + k + '" class="sudokuinput" maxlength="1"></td>';
                toappendfinal += toappend;
            }
            toappend = '</tr>';
            toappendfinal += toappend;
        }
        toappendfinal += '</table></div>';
        sudokus.innerHTML += toappendfinal;
    }
});
//takes a 2-dimensional array of rows and converts it to an array of 3x3 blocks
function getBlocks(sudoku) {
    let blocks = new Array();
    for (let j = 0; j < 9; j += 3) {
        for (let x = 0; x < 9; x += 3) {
            let block = new Array();
            for (let i = j; i < j + 3; i++) {
                for (let k = x; k < x + 3; k++) {
                    block.push(sudoku[i][k]);
                }
            }
            blocks.push(block);
        }
    }
    return blocks;
}
//alerts if sudoku isnt solvable or input wrong --> variable "characters" true
function checkSudoku(sudoku) {
    let characters = false;
    sudokuByColums = getSudokuByColumns(sudoku);
    console.log(sudokuByColums);
    sudoku.forEach(row => {
        if (containsDuplicates(row)) {
            characters = true;
        }
        //looks for anything else than digits and returns amount of valid digits in sudoku
        row.forEach(element => {
            console.log(element);
            if (isNaN(element) || element > 9) {
                if (element !== 0) {
                    characters = true;
                }
            }
        })
    });
    sudokuByColums.forEach(column => {
        if (containsDuplicates(column)) {
            characters = true;
        }
    });
    blocks = getBlocks(sudoku);
    blocks.forEach(block => {
        if (containsDuplicates(block)) {
            characters = true;
        }
    });
    if (characters === true) {
        let result = "Invalid input, check again! ";
        pushResult(result);
    }
}

//checks if an sudoku row/column/block array has the same number twice
function containsDuplicates(array) {
    //https://bobbyhadz.com/blog/javascript-check-if-array-contains-duplicates
    //https://bobbyhadz.com/blog/javascript-remove-empty-elements-from-array#:~:text=To%20remove%20all%20empty%20elements,elements%20that%20satisfy%20the%20condition.
    //filter() return an array without duplicates
    array = array.filter(element => {
        return element != 0;
    });
    if (array.length !== new Set(array).size) {
        return true;
    }
    return false;
}

//converts a 2-dimensional array ordered by rows to a 2-dimensional array ordered by columns
function getSudokuByColumns(sudoku) {
    let sudokuByColums = new Array();
    for (let i = 0; i < 9; i++) {
        let column = new Array();
        for (let k = 0; k < 9; k++) {
            column.push(sudoku[k][i]);
        }
        sudokuByColums.push(column);
    }
    return sudokuByColums;
}

//checks if sudoku is solvable considering the amount of filled fields
function checkSameAmountOfNumbers(sudokus) {
    let count = [0, 0];
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 9; i++) {
            for (let k = 0; k < 9; k++) {
                if (sudokus[j][i][k] != 0) {
                    count[j]++;
                }
            }
        }
    }
    if (count[0] == count[1]) {
        return true;
    } else {
        return false;
    }
}

function getSudokuFromBlock(sudoku) {
    let newsudoku = new Array();
    for (let j = 0; j < 3; j++) {
    let newsudoku3rows = new Array();
    for (let i = 0; i < 3; i++) {
        let row = new Array();
        for (let k = 0; k < 3; k++) {
            row.push(sudoku[k+j*3].slice(0+3*i, 3+3*i));
        }
        //https://www.youtube.com/watch?v=cwWWpi0sHqE
        rowconcat = ArrayConcat2d(row);
        newsudoku3rows.push(rowconcat);
    }
    newsudoku.push(newsudoku3rows);
}
    newsudoku = ArrayConcat2d(newsudoku);
    return newsudoku;
}

function ArrayConcat2d(row){
    rowconcat = row.reduce((accum, curVal) => {
        return accum.concat(curVal);
    });
    return rowconcat;
}