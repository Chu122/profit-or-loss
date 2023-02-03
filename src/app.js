//taking inputs into js by using queryselector and id's
const initialPrice =document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputEl =document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current){
    if (initial > current ){
        //loss logic
        var loss =(initial - current)*quantity;
        //lossPercentage
        var lossPer =(loss/initial)*100;
        outputEl.style.color= 'red';

        showOutput(`Oops!! Your Loss is ${loss} and loss percentage is ${lossPer} 😑`)
    }else if(current > initial){
        //profit logic
        var profit =(current -initial)*quantity;

        var profitPer =(profit/ initial)* 10
        outputEl.style.color= 'green';

        showOutput(`Yay!! Your Profit is ${profit} and profit percentage is ${profitPer} 💸`)
    }
    else{
        //the rest logic
        showOutput(`No pain no gain and No gain no pain 💪🏻`)
        outputEl.style.color= 'white';
    }
}

function showOutput(message){
    outputEl.innerText = message;
    // outputEl.innerText = 'Enter all the input fields';


}
function submitHandler(){
    var iP = Number.parseFloat(initialPrice.value).toFixed(2);
    var qty = Number.parseFloat(stocksQuantity.value).toFixed(2);
    var curr = Number.parseFloat(currentPrice.value).toFixed(2);

    calculateProfitAndLoss(iP, qty, curr);
}
submitBtn.addEventListener('click', submitHandler);
