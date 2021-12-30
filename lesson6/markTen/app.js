var billAmount = document.querySelector('#bill');
var cashGiven = document.querySelector("#cash");
var button = document.querySelector("#btn-calculate");
var output = document.querySelector("#change");

function validReturn(bill, cash){
    if (bill && cash){
        if((bill >= 0) && (cash >= 0)){
            // was running into some error like 1223 - 123 < 0. Hence made them same length
            while(cash.length > bill.length){
                bill = "0" + bill;
            }
            //console.log(typeof bill);
            bill = parseFloat(bill);
            //console.log(typeof bill);
            if (cash >= bill) {
                var change = cash - bill;
                return change;
            } else {
                return 'Cash given is less than the bill amount';
            }
        } else {
            return 'Invalid amount! Values should be greater than 0';
        }
    } else {
        return 'Empty fields!!!'
    }
}

function currencies(change){
    var currencyArr = [2000, 500, 100, 20, 10, 5, 1];
    var currencyNumArr = [];
    var totalLeft = change;
    for(var i=0; i < currencyArr.length; i++){
        var denom = currencyArr[i];
        var notes = Math.trunc(totalLeft/denom);
        currencyNumArr.push(notes);
        totalLeft = totalLeft - notes*denom;
        var outputID = "#t" + denom;
        document.querySelector(outputID).innerText = notes;
        //console.log(outputID);
    }
    //console.log(totalLeft)
    return currencyNumArr;
}

function callback(){
    //console.log("clicked!");
    //console.log(billAmount.value);
    //console.log(cashGiven.value);
    //console.log(cashGiven.value-billAmount.value);
    var change = validReturn(billAmount.value, cashGiven.value);
    output.innerText = change;
    if (typeof change === 'number'){
        currencies(change);
    }
    //console.log(distribution);
    //console.log(typeof change);
    //console.log(typeof billAmount.value);
}


button.addEventListener("click", callback);

var tableNotes = document.querySelectorAll(".notes")
function clear(){
    //inputField.innerText = "";
    output.innerText = "";
    tableNotes = "";
}

cashGiven.addEventListener("change", clear);
billAmount.addEventListener("change", clear);