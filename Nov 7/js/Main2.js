document.querySelector(`form`).onsubmit = (event)=>{
    if(document.querySelector(`.name`).value ===`` ||
        document.querySelector(`.email`).value ===``){
        event.preventDefault(); //keisk standartine elgsena
        document.querySelector(`.error`).innerHTML = "<p>Uzpildyk</p>"
    }
}