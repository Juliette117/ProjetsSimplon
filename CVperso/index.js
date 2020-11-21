

ScrollReveal().reveal('h2', {delay: 200, origin: 'top', distance: '40px'});
ScrollReveal().reveal('a', {delay: 300, origin: 'top', distance: '40px'});


function myFunction() {
    const element = document.body;
    element.classList.toggle("dark");
    const texte = document.querySelector("button").innerHTML;
    if (texte==="Dark Mode"){
        document.querySelector("button").innerHTML = "Light Mode";
    }
    else{
    document.querySelector("button").innerHTML = "Dark Mode";
    }


}





