
    // phone event handler 
document.getElementById('phone-plus').addEventListener('click', function(){
getInputValue('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
getInputValue('phone',1219,false);
});
// case event handler
document.getElementById('case-plus').addEventListener('click', function(){
    getInputValue('case',59,true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    getInputValue('case',59,false);
});

// input function 
function getInputValue(otherNumberId,price,IsIncreasing){
    const counterNumber = document.getElementById(otherNumberId +'-number');
    let values = counterNumber.value;
    if(IsIncreasing == true){
        values = parseInt(values) + 1;
    }else if(values > 1){
        values = parseInt(values) - 1;
    }
    counterNumber.value = values;
    // products calculation 
    const productTotalText = document.getElementById(otherNumberId+'-total');
     productTotalText.innerText = values * price ;
     getCalculation()
}
// quantity number function
function getInputValueId(product){
    const numbers = document.getElementById(product + '-number');
    const numbersValue = parseInt(numbers.value);
    return numbersValue;
}
// calculation function
function getCalculation(){
    // calculate
    const phoneTotal = getInputValueId('phone')*1219;
    const caseTotal = getInputValueId('case')*59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalAmount = subTotal + tax;
    // value set
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('total-price').innerText = totalAmount;
    document.getElementById('tax-amount').innerText = tax.toFixed(2);

} 
