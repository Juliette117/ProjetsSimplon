// alert("hello world");



const colorInput = document.getElementById('choose');

colorInput.addEventListener('input', () => {
    document.querySelector('body').style.backgroundColor = colorInput.value;
});


function changeColor(color) { 
    document.body.style.background = color; 
}
