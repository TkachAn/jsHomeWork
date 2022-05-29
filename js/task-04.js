const btnInc = document.querySelector('button[data-action="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');
let inc = () => document.querySelector("#value").textContent++;
let dec = () => document.querySelector("#value").textContent--;
btnInc.addEventListener("click", inc);
btnDec.addEventListener("click", dec); 