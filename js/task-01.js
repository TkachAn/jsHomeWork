const categoriesCnt = document.querySelectorAll("li.item");//.length;
console.log(`Number of categories: ${categoriesCnt.length}`);
// console.log(listWithClass.childElementCount);


for(const el of categoriesCnt){
    console.log(`category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
}


const childEl = document.querySelectorAll('body');//('#categories');
console.log(childEl);