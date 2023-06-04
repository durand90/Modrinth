

function findCount(str) {

    let paper = {};

    for (i of str) {
        if (paper[i]) {
            paper[i] += 1;
        } else if (!paper[i]) {
            paper[i] = 1;
        }
    } return paper;fg
}

console.log(findCount('str about this ok for'))