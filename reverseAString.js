

// var three = [];

// three.push(4)

// console.log(three)



function reverseAString(arr) {

    let y = [];

    for (let i = arr.length-1; i >= 0; i--) {

        // console.log(arr[i])

     y.push(arr[i]);

    
    } return y.join('');
}

console.log(reverseAString('strm'));