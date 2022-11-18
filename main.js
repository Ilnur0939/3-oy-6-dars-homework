let text = document.querySelector('.text')

let number = prompt('Sonni kiriting')

let firstResult = number % 3
let nextResult = number % 5


if(firstResult == 0 && nextResult == 0){
    text.textContent = "Bu son 3 ga ham 5 ga ham bo'linadi"
}
else if(firstResult == 0 && nextResult !== 0){
    text.textContent = "Bu son 3 ga bo'linadi"
}
else if(firstResult !== 0 && nextResult == 0){
    text.textContent = "Bu son 5 ga bo'linadi"
}
else{
    text.textContent = "Bu son 3ga ham 5 ga ham bo'linmaydi"
}
