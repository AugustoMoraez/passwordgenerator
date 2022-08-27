let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = '1234567890abcdefghijklmnopqrstuvwxyz';

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML =this.value;
}
function gerar(){
     let pass = '';
     for(let i = 0 ,n = charset.length ; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));

     }
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass
}
function copyPass(){
    navigator.clipboard.writeText(novaSenha);
}
