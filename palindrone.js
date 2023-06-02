


// function palindrone(str) {
//     for (let i = 0; i < str.length/2; i++) {
//         for (let y = str.length-1; y > str.length/2; i--) {
//             if (str[i] == str[y]) {
//                 return "palindrone"
//             } 
//             if (str[i] != str[y]) {
//                 return "not a palindrone"
//             }
//         }
//     }
// };

// console.log(palindrone('momam'));





// function palindrone(str) {
//     for (let i = 0; i < str.length/2; i++) {
//         for (let y = str.length-1; y > str.length/2; i--) {
//             if (str[i] == str[y]) {
//                 console.log(str[i]);
//                 console.log(str[y])
//                 return "same"
//             } 
//             if (str[i] != str[y]) {
//                 console.log(str[i]);
//                 console.log(str[y]);
//                 return "different"
//             }
//         }
//     }
// };

// console.log(palindrone('amomomaa'));


function check(arr) {
    for (let i = 0; i < arr.length/2; i++)
    for (let y = arr.length-1; y > arr.length/2; y--)
            console.log(arr[i])
            console.log(arr[y])
            
    
};

console.log(check([1,2,3,4,5,6,7]))