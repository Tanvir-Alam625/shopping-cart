
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
}
calculation function
function getCalculation(){

} 
