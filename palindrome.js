


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





function palindrone(str) {
    for (let i = 0; i < str.length/2; i++) {
        for (let y = str.length-1; y > str.length/2; y--) {
            if (str[i] == str[y]) {
                console.log(str[i]);
                console.log(str[y])
                i++;
            } else if (str[y] == str[i]) {
                y--;
            }
            else if (str[i] != str[y]) {
                console.log(str[i]);
                console.log(str[y]);
                return "Not Palindrome"
            } else {
                i++;
                y--;
            }
        }
    } return 'Palindrome';
};

console.log(palindrone('amomoma'));


// function check(arr) {
//     for (let i = 0; i < arr.length/2; i++) {
//         for (let y = arr.length-1; y > arr.length/2; y--) {
//             if (arr[i] == arr[y]) {
//                 i++
//             // } else if (arr[y] == arr[i]) {
//             //     y--;
//             } else if (arr[i] != arr[y]) {
//                 return 'not palindrome'
//             } 
//             else {
//                 i++;
//                 y--;
//             }
            
            
//         }
//     } return 'palindrome';
// };

// console.log(check('sts'))