document.getElementById('login-btn').addEventListener('click', function(event){
event.preventDefault()
const accountNumber = document.getElementById('account-number').value;
const pin = document.getElementById('pin').value;
const convertPin = parseInt(pin);
if(accountNumber.length === 11){
    if(convertPin===1234){
        window.location.href="./script/main.html"
    }
    else{
        alert('Pin Number Dose not match')
    }
}
else{
    
    alert('Account Number dose not match')
}

})