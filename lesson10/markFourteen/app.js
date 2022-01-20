// variables 
var initialPrice = document.getElementById('initialPrice');
var quantityPurchased = document.getElementById('quantityPurchased');
var currentPrice = document.getElementById('currentPrice');
var submit = document.getElementById('btnSubmit');
var result = document.getElementById('profitLoss');

// verifying for positive value
function positiveCheck(initial, quantity, final) {
    if ((initial > 0) && (quantity > 0) && (final > 0)){
        return true;
    } else {
        return false;
    }
};

// profit-loss function
function findProfitLoss(initial, quantity, final){
    if(positiveCheck(initial, quantity, final)) {
        var pNL = (final - initial)*quantity;
        if(pNL > 0){
            result.style.color = "green";
            return `Damn!! Your choice is great. Your current profit is ${pNL}`;
        } else if (pNL < 0) {
            result.style.color = "red";
            return `Sed!! You are currently in loss of ${pNL}`;
        } else {
            result.style.color = "white";
            return 'No pain, no gain! No gain, no pain!'
        }
    } else {
        return 'Enter only positive values only';
    }
}


// callback function
function callback(){
    //console.log('clicked!');
    //result.innerText = `IP: ${initialPrice.value}\nQ: ${quantity.value}\nCP: ${currentPrice.value}`; 
    result.innerText = findProfitLoss(initialPrice.value, quantityPurchased.value, currentPrice.value);
}

// event listener
submit.addEventListener('click', callback);
