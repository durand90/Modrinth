


// function anagram(arr1, arr2) {
//     let array1 = {};
//     let array2 = {};
//     for (let i = 0; i < arr1.length; i++)
//     for (let y = 0; i < arr2.length; y++) {
//         if (arr1[i] != array1) {
//             array1.push(arr1[1])
//         }
//     }
// }

// console.log(anagram('money', 'neymo'));



function test(par) {
    letter = {}

    for (let i = 0; i < par.length; i++) {

       letter = letter.push(i)
        return letter;
    }
}

console.log(test([1,2,3,4]));
