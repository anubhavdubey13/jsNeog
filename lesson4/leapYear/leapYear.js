function isLeapYear(year){
    if(year%100 === 0){
        if(year%400 === 0){
            return true;
        }
    } else if (year%4 === 0) {
        return true;
    } else {
        return false;
    }
}

function msgLeap(year) {
    if (isLeapYear(year)){
        return 'Woah! You were born in a leap year!\n Share on social media';
    } else {
        return '75% of great folks are born in a non-leap year. We think you are destined for greatness.';
    }
}

export { msgLeap };