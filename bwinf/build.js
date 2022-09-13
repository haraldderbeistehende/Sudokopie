function calcMoveLine(move) {
    let from = move[0];
    let to = move[1];
    let blocks = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    for (let i = 0; i < 3; i++) {
        if (from[0] == to[0]) {
            return ["noAction"];
        }
        if (blocks[i].includes(from[0]) && blocks[i].includes(to[0])) {
            x = from[0];
            if (from[0] > to[0]) {
                x--;
            }
            return ["innerLinePermutation", x];
        } else {
            x = i;
            if (from[0] > to[0]) {
                x--;
            }
            if (blocks[i].includes(from[0])) {
                return ["BlockLinePermutation", x];

            }
        }
    }
}

function calcMoveColumn(move) {
    let from = move[0];
    let to = move[1];
    let blocks = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    for (let i = 0; i < 3; i++) {
        if (from[1] == to[1]) {
            return ["noAction"];
        }
        if (blocks[i].includes(from[1]) && blocks[i].includes(to[1])) {
            x = from[1];
            if (from[1] > to[1]) {
                x--;
            }
            return ["innerColumnPermutation", x];
        } else {
            x = i;
            if (from[1] > to[1]) {
                x--;
            }
            if (blocks[i].includes(from[1])) {
                return ["BlockColumnPermutation", x];

            }
        }
    }
}

function solve(moves, input){
let steps = [];
for (let i = 0; i < moves.length; i++) {
    steps.push(calcMoveLine(moves[i]));
    steps.push(calcMoveColumn(moves[i]));
}
console.log(steps);
console.log(input);
}


function do2(){
    for (let i = 0; i < steps.length; i++) {
        if(steps[i][0] =="innerLinePermutation"){
            input = innerLinePermutation(input, steps[i][1]);
        }
        if(steps[i][0] =="BlockLinePermutation"){
            input = blockLinePermutation(input, steps[i][1]);
        }
    }
}