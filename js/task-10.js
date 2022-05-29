function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let num = 0;
const collection = document.querySelector('#boxes');
console.log(collection);

let inputNum = document.querySelector('input[type="number"]');
console.log(inputNum);

const btnCreate = document.querySelector('button[data-create]');
// console.log(btnCreate);

const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);

inputNum.addEventListener('input', createNun);
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('mousedown', destroyBoxes);


function createNun(){
	console.log(inputNum.value);
	return inputNum.value;
	}
	let size = 30;
function createBoxes(){
	 
	console.log(inputNum.value);
	for(let i = 0; i< inputNum.value; i++){
		const divN = document.createElement("div");
		size = `${30*(i+1)}px`;
		console.log("size",size);
	divN.style.backgroundColor = getRandomHexColor();
divN.style.height = size;
divN.style.width = size;
console.log(divN);
collection.append(divN);
	}

console.log(collection);
	}

function destroyBoxes(){
	collection.remove();
	}

// console.log(inputNum.value);			
// console.log('collection:',collection);