function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let num = 0;
const collection = document.querySelector('#boxes');

let inputNum = document.querySelector('input[type="number"]');

const btnCreate = document.querySelector('button[data-create]');

const btnDestroy = document.querySelector('button[data-destroy]');

inputNum.addEventListener('input', createNun);
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('mousedown', destroyBoxes);


function createNun(){
	console.log(inputNum.value);
	return inputNum.value;
	}
const size = 30;
function createBoxes(){
	for(let i = 0; i< inputNum.value; i++){
		const divN = document.createElement("div");
		let siz = `${Number(size)*(i+1)}px`;
		console.log("size",siz);
		divN.style.backgroundColor = getRandomHexColor();
		divN.style.height = siz;
		divN.style.width = siz;
		console.log(divN);
		collection.append(divN);
	}

// console.log(collection);
	}

function destroyBoxes(){
	collection.innerHTML = '';
	}
