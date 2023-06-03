


// function test(arr1, arr2) {

//     if (arr1.length != arr2.length) {
//         return 'not anagram';
//     }
//     let letter = {};
//     let matter = {};

//     for (i of arr1) {
//         if (letter[i]) {
//             letter[i] += 1;
//         } else if (!letter[i]) {
//             letter[i] = 1;
//         }
//     }
//     console.log(Object.keys(letter).sort());
    
//     for (y of arr2) {
//         if (matter[y]) {
//             matter[y] += 1;
//         } else if (!matter[y]) {
//             matter[y] = 1;
//         }
//         console.log(Object.keys(matter).sort());
//     }
//     console.log(matter)
    
// } 

// console.log(test('staam', 'maast'));


function test(par1, par2) {
    if (par1.length != par2.length) {
        return 'not anagram'
    }

    let letter = par1.split('').sort().join('');
    let matter = par2.split('').sort().join('');

    if (letter == matter) {
        return 'anagram';
    } else {
        return 'not anagram';
    }
}


console.log(test('sam', 'mus'));