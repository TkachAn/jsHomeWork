function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');
// console.log(bodyRef);

const buttonRef = document.querySelector('.change-color');//.value;
// console.log(buttonRef);

const textColorRef = document.querySelector('.color');//.value;
// console.log(buttonRef);

buttonRef.addEventListener('click', onChangeColor);

function onChangeColor(){
	const colorHEX = getRandomHexColor();
	bodyRef.style.backgroundColor = colorHEX;
	textColorRef.textContent = colorHEX;
}