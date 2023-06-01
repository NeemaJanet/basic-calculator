const buttonsEl= document.querySelectorAll("button");
const inputField=document.getElementById('input');
for(let i=0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener('click',()=>{
        const buttonValue=buttonsEl[i].textContent
        if(buttonValue==="CE"){
            clearInput()
        }else if(buttonValue=="AC"){
            deleteValue(buttonValue)

        }else if(buttonValue=="="){
            calculate()
        }else{
            appendValue(buttonValue)
        }
    })
}
const clearInput=()=>{
    inputField.value=""
}
const calculate=()=>{
    if (inputField.value !="")
    { inputField.value=eval(inputField.value)}

}
const appendValue=(value)=>{
    inputField.value +=value

}
const deleteValue=(value)=>{
    inputField.value=inputField.value.slice(0, - 1)
}
