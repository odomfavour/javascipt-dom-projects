const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const triggerBtn = document.querySelector('.btn');
const color = document.querySelector('.color');

triggerBtn.addEventListener('click', changeBackground) 

function changeBackground() {
    console.log('Here')
// #ffffff
let pickedColor = '#'

    for(let i= 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length)
        pickedColor += hex[randomNumber]
    }
    console.log(pickedColor)
    document.body.style.background = pickedColor
    color.textContent = pickedColor
}