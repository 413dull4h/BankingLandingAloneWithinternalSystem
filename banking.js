// banking HTML
// deposit function
document.getElementById('deposit-btn').addEventListener('click', function () {
    const InputDep = document.getElementById('depositinput');
    const DepAmmount = InputDep.value;
    outputDep.innerText = DepAmmount;
    InputDep.value = '';
    const outputDep = document.getElementById('pushdep');

    const PreviousDepositAmmount = parseFloat(outputDep.innerText) + parseFloat(DepAmmount);
    outputDep.innerText = PreviousDepositAmmount;
    InputDep.value = '';
    const TotalMoney = document.getElementById('TotalAmmount');
    const totalNum = PreviousDepositAmmount + parseFloat(TotalMoney.innerText);
    const TotalMoney = totalNum;
})