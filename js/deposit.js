document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');

    const newDepositTotal = newDepositAmount + previousDepositTotal;

    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    
})