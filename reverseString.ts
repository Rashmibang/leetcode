/*
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */


let arr1: string[] = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]

arr1 = ['h', 'e', 'l', 'o']
for (let i = 0; i < arr1.length / 2; i++) {
    let temp: string = arr1[i];
    arr1[i] = arr1[arr1.length - 1 - i];
    arr1[arr1.length - 1 - i] = temp;
}
console.log(arr1);
