const inputText = document.querySelector("#name-input");
inputText.addEventListener("input", onInputChange);
function onInputChange(event){
    document.querySelector("#name-output").textContent = event.currentTarget.value;
}
