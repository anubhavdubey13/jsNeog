var primeNum = [2,3,5,7,9,11,13,17,19,23,29,31];

function isPrime(num){
    return primeNum.includes(num);
}

function primePrint(num){
    var prime = isPrime(num);
    if (prime){
        return 'Woah lucky homie! You were born on a prime date!'
    } else {
        return 'Woww fella! You were born on a composite date!'
    }
}

export { primePrint };