//onclick function, reads the users input values and puts them in a 3-dimensional array ordered by rows
function compare() {
    document.getElementById("result").innerHTML = "";
    let id, content;
    var inputsudokus = new Array();
    for (let j = 1; j < 3; j++) {
        var sudoku = new Array();
        for (let k = 1; k < 10; k++) {
            let row = new Array();
            for (let i = 1; i < 10; i++) {
                id = j + '-' + k + '-' + i;
                content = document.getElementById(id).value;
                row.push(content);
            }
            sudoku.push(row);
        }
        inputsudokus.push(sudoku);
    }
    if (JSON.stringify(inputsudokus[1]) == JSON.stringify(inputsudokus[0])) {
        alert("You entered the same sudokus lol.");
    }
    //converts input strings to integers
    let sudokus = new Array();
    for (let j = 0; j < 2; j++) {
        let sudokunum = new Array();
        for (let i = 0; i < 9; i++) {
            let sudokurow = new Array();
            for (let k = 0; k < 9; k++) {
                if (inputsudokus[j][i][k] == "" || inputsudokus[j][i][k] == " ") {
                    sudokurow.push(0);
                } else {
                    sudokurow.push(parseInt(inputsudokus[j][i][k]))
                }
            }
            sudokunum.push(sudokurow);
        }
        sudokus.push(sudokunum);
    }
    //calls functions to check if both sudokus are solvable (funcs.js)
    checkSudoku(sudokus[0]);
    checkSudoku(sudokus[1]);
    mainAlgorithm(sudokus);

    let result;
    //calls function to check if both sudokus have the same amount of fields filled
    if (checkSameAmountOfNumbers(sudokus) === false) {
        result = "Sudokus cannot be the same, the amount of entered digits does not match. Make sure you've entered everything correctly! ";
        pushResult(result)
    }
}
function pushResult(result) {
    document.getElementById("result").innerHTML += result;
}