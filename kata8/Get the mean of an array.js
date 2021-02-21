function getAverage(marks) {
    let total = 0;
    for(let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    let avg = total / marks.length;
    return Math.round(avg)

}