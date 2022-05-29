const inputRange = document.querySelector('#font-size-control');
const textRange = document.querySelector("#text");
inputRange.addEventListener("input", onInputRange);
function onInputRange(event){
    textRange.style.fontSize = `${event.currentTarget.value}px`;
    console.log(textRange.style.fontSize);
}
