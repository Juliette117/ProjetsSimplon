
ScrollReveal().reveal('h1', {delay: 100, origin: 'top', distance: '40px', scale: 2});
ScrollReveal().reveal('h5', {delay: 900, origin: 'top', distance: '40px'});
ScrollReveal().reveal('.card', {delay: 1200, origin: 'top', distance: '40px'});
ScrollReveal().reveal('.card-text', {delay: 1200, origin: 'top', distance: '40px'});
ScrollReveal().reveal('li', {delay: 700, origin: 'top', distance: '40px'});




function openNav() {
    document.getElementById("sideNavigation").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



const titre = document.getElementById("titre", "texte");
const txt = titre.dataset.label;
let i 	= 0 ;
function showLetters()
{
  let timeOut ;
  if(i < txt.length)
	{
	  titre.innerHTML += `<span>${txt[i]}</span>` ;
	  timeOut = setTimeout(showLetters,70)
	  i++
	}

}
showLetters();







// if (window.matchMedia("(min-width: 600px)").matches) {
//
//   } else {
//    
//   }









