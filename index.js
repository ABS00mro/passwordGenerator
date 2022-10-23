let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pswdEl1 = document.getElementById("pswd-el1");
let pswdEl2 = document.getElementById("pswd-el2");
let pswdEl3 = document.getElementById("pswd-el3");
let pswdEl4 = document.getElementById("pswd-el4");
let pswdLength = 8;

function randompswd(){
    
    pswdEl1.textContent = " ";
    pswdEl2.textContent = " ";
    pswdEl3.textContent = " ";
    pswdEl4.textContent = " ";
    for(let i = 0; i < pswdLength; i++){

     pswdEl1.textContent += chars[Math.floor(Math.random() * chars.length)];
     pswdEl2.textContent += chars[Math.floor(Math.random() * chars.length)];
     pswdEl3.textContent += chars[Math.floor(Math.random() * chars.length)];
     pswdEl4.textContent += chars[Math.floor(Math.random() * chars.length)];
        
    }
}