function mainAlgorithm(sudokus) {
    let progress = [];
    let input = sudokus[0];
    let output = sudokus[1];
    let amountinput = getAmountOfDigits(input);
    let amountoutput = getAmountOfDigits(output);
    let sameNums = compareDigits(amountinput, amountoutput);
    progress.push(input);
    let out = changeDigits(sameNums, input);
    numsChanged = out[0];
    let change = out[1];
}