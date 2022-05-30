const inputText = document.querySelector("#name-input");
inputText.addEventListener("input", onInputChange);
function onInputChange(event){
	if(event.currentTarget.value !==''){
	document.querySelector("#name-output").textContent = event.currentTarget.value;
	}else{
	document.querySelector("#name-output").textContent = "Anonymous";}
}
