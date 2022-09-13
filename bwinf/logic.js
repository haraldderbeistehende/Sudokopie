//changes out the 1st +2nd column at columnat
function innerColumnPermutation(sudoku, columnat) {
    sudoku = getSudokuByColumns(sudoku);
    let newsudoku = new Array();
    for (let i = 0; i < 9; i++) {
        if (i == columnat) {
            newsudoku.push(sudoku[i + 1]);
        }
        newsudoku.push(sudoku[i]);
        if (i == columnat) {
            i++;
        }
    }
    console.log(newsudoku);
    return newsudoku;
}
function blockColumnPermutation(sudoku, blockColumnAt) {
    sudoku = getBlocks(sudoku);
    console.log(sudoku);
    let newsudoku = new Array();
    for (let i = 0; i < 9; i++) {
        if (blockColumnAt == 0) {
            console.log("made it here (1)");
            if (i % 3 === 1) {
                newsudoku.push(sudoku[i - 1]);
                console.log("made it here (2)");
            }
            if (i % 3 === 2) {
                newsudoku.push(sudoku[i]);
                console.log("made it here (2)");
            }
            if (i % 3 === 0) {
                newsudoku.push(sudoku[i + 1]);
                console.log("made it here (2)");
            }
        }
        if (blockColumnAt == 1) {
            if (i % 3 === 1) {
                newsudoku.push(sudoku[i +1]);
            }
            if (i % 3 === 2) {
                newsudoku.push(sudoku[i-1]);
            }
            if (i % 3 === 0) {
                newsudoku.push(sudoku[i]);
            }
        }
    }
    console.log(newsudoku);
    return getSudokuFromBlock(newsudoku);
}
function innerLinePermutation(sudoku, lineat) {
    let newsudoku = new Array();
    for (let i = 0; i < 9; i++) {
        if (i == lineat) {
            newsudoku.push(sudoku[i + 1]);
        }
        newsudoku.push(sudoku[i]);
        if (i == lineat) {
            i++;
        }
    }
    console.log(newsudoku);
    return newsudoku;
}
function blockLinePermutation(sudoku, blockColumnAt) {
    sudoku = getBlocks(sudoku);
    console.log(sudoku);
    let newsudoku;
    line1 = sudoku.slice(0, 3);
    console.log(line1);
    line2 = sudoku.slice(3, 6);
    line3 = sudoku.slice(6, 9);
    if(blockColumnAt == 0){
        newsudoku = [line2, line1, line3];
    }
    if(blockColumnAt == 1){
        newsudoku = [line1, line3, line2];
    }
    return getSudokuFromBlock(ArrayConcat2d(newsudoku));
}
//rotates to the left
function rotate90(sudoku) {
    let newsudoku = new Array();
    for (let i = 0; i < 9; i++) {
        let newrow = new Array();
        for (let k = 0; k < 9; k++) {
            newrow.push(sudoku[k][8 - i]);
        }
        newsudoku.push(newrow);
    }
    console.log(newsudoku);
    return newsudoku;
}