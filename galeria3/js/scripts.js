document.addEventListener("DOMContentLoaded", function() {
let opacidad = document.querySelectorAll('.opacidad');
console.log(opacidad);
for(let elemento of opacidad) {
    elemento.children[0].children[2].addEventListener('mouseover', function() {
        elemento.children[0].children[2].classList.add('opacity');
    })

    elemento.children[0].children[2].addEventListener('mouseout', function() {
        elemento.children[0].children[2].classList.remove('opacity')
    })
}







});