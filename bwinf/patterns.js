function getDigitChange(sudoku1, sudoku2){
    let Digits1 = new Object();
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            Digits1[sudoku[i][k]]++;
        }  
    }
    let Digits2 = new Object();
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            Digits2[sudoku[i][k]]++;
        }  
    }
    for (let i = 0; i < 9; i++) {
        if(Digits1[i] == Digits2[i]){
            
        }
    }
}