var arr1 = [1, 4, 7, 3, 8];
var count;
var countarr = [];
for (var i = 0; i < arr1.length; i++) {
    count = 0;
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            count = count + 1;
        }
        else {
            count = count + 0;
        }
    }
    countarr.push(count);
}
console.log(countarr);
