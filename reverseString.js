/*
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */
var arr1 = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"];
arr1 = ['h', 'e', 'l', 'o'];
for (var i = 0; i < arr1.length / 2; i++) {
    var temp = arr1[i];
    arr1[i] = arr1[arr1.length - 1 - i];
    arr1[arr1.length - 1 - i] = temp;
}
console.log(arr1);
