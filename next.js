

function nonMatchChar(str) {
    let letter = {}
    let time = [];

    for (i of str) {
        if (letter[i]) {
            letter[i] += 1;
        } else {
            letter[i] = 1;
        }
    } 
    console.log(letter)
    
    for (const key in letter) {
    if (Object.values(letter) == 1) { 
        console.log(Object.keys(letter))
    } 
    }
    console.log(time)
    let y = Object.values(letter)
    
    for (i of y) {
        if (i > 1) {
            console.log('greater')
        } else {
            console.log('lesser')
        }
    }
    

}

console.log(nonMatchChar('a very funny string'))