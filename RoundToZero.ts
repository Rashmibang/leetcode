let num: number = 14;
let rem: number;
let steps = 0
rem = num;
do {
    if (rem % 2 != 0) {
        rem = rem - 1;
        steps = steps + 1;
        //console.log(steps);
    } else {
        rem = rem / 2;
        steps = steps + 1;
    }
} while (rem > 0)

console.log(steps);
