// alert("hello world");



const colorInput = document.querySelector('#choose');

colorInput.addEventListener('change', function () {
    document.querySelector('body').style.backgroundColor = colorInput.value;
});


function changeColor(color) { 
    document.body.style.background = color; 
}