

function nonMatchChar(str) {
    let letter = {}
    let p = [];

    for (i of str) {
        if (letter[i]) {
            letter[i] += 1;
        } else {
            letter[i] = 1;
        }
    } 
    console.log(letter)

    for (let key in letter){
    // console.log(`${letter[key]}`);
    
    if (letter[key] < 2) {
        p.push(key)
    }
    console.log(p)

        
    } return p;
    

    
} 
    



console.log(nonMatchChar('a very funny string'))

