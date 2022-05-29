const inputText = document.querySelector("#validation-input");
inputText.addEventListener('blur', (event)=>{
     
    const word = event.currentTarget.value
    console.log(word);
     const cnt = word.length;
     console.log("cnt:",cnt);
     const dataLength = document.querySelector('input[data-length="6"]').dataset.length;
     console.log("dataLength:", dataLength);
    if(cnt !== 0) {
    if(cnt === Number(dataLength)){
        document.querySelector('input[data-length="6"]').classList.remove('invalid');
        document.querySelector('input[data-length="6"]').classList.add('valid');
     }
     else{
        document.querySelector('input[data-length="6"]').classList.remove('valid');
        document.querySelector('input[data-length="6"]').classList.add('invalid');
     }}else{
        document.querySelector('input[data-length="6"]').classList.remove('invalid');
        document.querySelector('input[data-length="6"]').classList.remove('valid');
     }

})
