var primeNum = [2,3,5,7,11,13,17,19,23,29,31];

function primePrint(num){
    var prime = primeNum.includes(num);
    //console.log(num,prime);
    if (prime){
        return 'Woah lucky homie! You were born on a prime date!'
    } else {
        return 'Woww fella! You were born on a composite date!'
    }
}

export { primePrint };