const input = document.querySelectorAll("input[type=checkbox]");
const total = document.getElementById("total-price"); 
const ticketsQuantidity = document.getElementById("tickets");  
const array = [];

function handleInput(element) {
    const elementState = element.target.checked;
    elementState ? array.push(element.target) : array.pop()

    ticketsQuantidity.innerHTML = array.length
    total.innerHTML = `R$ ${array.length * 25}`
}

addEventListener('click', handleInput)