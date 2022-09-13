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


function checkFUCK(){
    let nums = [1,2,3,4,5,6,7,8];
    for (let i1 = 0; i1 < 9; i1++) {
        for (let i2 = 0; i2 < i1; i2++) {
            for (let i3 = 0; i3 < i2; i3++) {
                for (let i4 = 0; i4 < i3; i4++) {
                    for (let i5 = 0; i5 < i4; i5++) {
                        for (let i6 = 0; i6 < i5; i6++) {
                            for (let i7 = 0; i7 < i6; i7++) {
                                for (let i8 = 0; i8 < i7; i8++) {
                                    for (let i9 = 0; i9 < i8; i9++) {
                                        let sameNums = new Object();
                                        sameNums[nums[i1]]=1;
                                        sameNums[i2]=nums[i1];
                                        sameNums[3]=nums[i1];
                                        sameNums[4]=nums[i1];
                                        sameNums[5]=nums[i1];
                                        sameNums[6]=nums[i1];
                                        sameNums[7]=i7;
                                        sameNums[8]=i8;
                                        sameNums[9]=i9;
                                        console.log(sameNums);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}