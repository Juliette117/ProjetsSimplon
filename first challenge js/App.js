
// 1)
// Déclarer deux variables avec comme valeur 4 et 5
// Créez une autre variable contenant l'addition des deux et l'afficher.
// TO DO

// const valeur = 4 ;
// const valeur2 = 5; 
// const valeur3 = 5+4;
// console.log(valeur3);
// Résultat dans la console : 9



// 2)
// Afficher la chaine de caractère suivante en majuscule
// const team = 'avengers';
// TO DO

// const team = 'avengers';
// console.log(team.toUpperCase());
// Résultat dans la console : AVENGERS



// 3)
// afficher la première lettre de la chaine de caractère suivante
// const team = 'avengers';
// TO DO

// const team = 'avengers';
// const firsttLetter = team[0] ;
// console.log(firsttLetter) ;
// Résultat dans la console : a



// 4)
// afficher la chaine de caractère suivante excepté la première lettre.
// const team = 'avengers';
// TO DO

// const team = 'avengers'; 
// console.log(team.substr(1));
// Résultat dans la console : vengers 



// 5)
// Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
// const firstName = 'Tony';
// const lastName = 'Stark';
// TO DO

// const firstName = 'Tony';
// const lastName = 'Stark';
// const fullName =  `"3000... that's crazy" ${firstName} ${lastName}`;
// console.log(fullName)
// Résultat dans la console : "3000... that's crazy" Tony Stark



// 6)
// Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
// const team = 'aveNgers';
// => Avengers
// TO DO

// const team = 'aveNgers';
// console.log(team.charAt(0).toUpperCase() + team.substring(1).toLowerCase());
// Résultatde dans la console : Avengers



// 7)
// Les tableaux
// Déclarez un tableau avec 5 villes
// Afficher la ville à l'indice 3
// Ajouter une ville au tableau
// Supprimer la ville à l'indice 2
// const villes = [];
// TO DO

// const villes = ['Paris', 'Montpellier', 'Angers', 'Honfleur', 'Nantes'] ;
// const firstEl = villes[3]
// console.log(firstEl)
// Résultat de la console : Honfleur 
// let villes = ['Paris', 'Montpellier', 'Angers', 'Honfleur', 'Nantes'] ;
// // villes.push('Marseille');
// // console.log(villes); 
// // Résultat de la console : Array(6) [ "Paris", "Montpellier", "Angers", "Honfleur", "Nantes", "Marseille" ]
// villes = ['Paris', 'Montpellier', 'Angers', 'Honfleur', 'Nantes', 'Marseille'] ;
// // delete villes[2];
// console.log(villes);
// // Résultat dans la console : Array(6) [ "Paris", "Montpellier", <1 empty slot>, "Honfleur", "Nantes", "Marseille" ]




// 8)
// Les boucles
// Comme tu le sais sans doute, pour parcourir un tableau,
// il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
// éléments au carré et afficher le tableau.
// const array1 = [2, 4, 8];
// TODO

// const array1 = [2, 4, 8];
// array1.forEach((boucle) => {
//     console.log(Math.pow(boucle, 2));
// });
// Résultat dans la console : 4 16 64




// 9)
// les conditions
// Déclarez une variable "age" avec la valeur de votre choix.
// En utilisant les conditions 'if' et 'else' affichez :
// peut voter si 'age' est supérieur ou égal à 18
// ne peut pas voter si 'age' est inférieur à 18
//TODO

// const age = 27;
// if(age >= 18){
// console.log("peut voter");
// }else{
// console.log("ne peut pas voter");
// } 
// Résultat de la console: peut voter



// 10)
// Afficher la date  d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est entre 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin
//TODO

// const today = new Date();
// const h=today.getHours();
// console.log(h);
// if(h < 5 && h > 17 ){
//     console.log("Bonjour");
//     }else{
//     console.log("Bonsoir");
//     } 
// Résultat dans la console: Bonsoir






//----------------- Fonctions -------------------

// const cl = console.log;



// 11)
// //Créez deux variables initialisées à 3 et 4.
// //Créez une fonction qui retourne l'addition de ces deux valeurs.
// const add = (num1, num2) => {
//   //TODO
//   };
  
// const add = (num1, num2) =>{
//   return num1 + num2;
// };
// cl( add(3, 4));
// Résultat dans la console : 7



// 12)
//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i (indice/index) au carré et l'afficher.

// const square = (number) => {
  //TODO
// };

// function square  (number)  {
//   let carre = Math.pow(number,2)
//   return carre;
// };
// cl(square(7));
// // Résultat dans la console : 49


  

//13)
// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
// const beatles = ["paul", "john", "ringo", "george"];
// const soustrait = (tableau) => {
//TODO
// };

// const beatles = ["paul", "john", "ringo", "georges"];
// const map1 = beatles.map(function(maj){
//     return maj.toUpperCase();
// });
// cl(map1);




//14)
//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.
// const tab = [-2 ,3 ,4 ];
// const soustrait = (somme, currentValue) => 
//   somme - currentValue;
// cl(tab.reduce(soustrait));
// Résultat : -9



// 15) 
// (vu en cours)
// //Créez une fonction qui renvoie la somme de chaque éléments du
// //tableau si celui-ci est supérieur à 0.
// const array2 = [-2, 4, -5, 3, 6];
// const addPositiveNumber = (tableau) => {
//  //TODO
// };

// const array1 = [-2, 4, -5, 3, 6]; 
// function sommeTab(array){
//   //la variable résultat attendu
//   let resultat = 0;
//   //Parcours du tableau en paramètre, tant que j'ai des éléments à lire
//   for(const element of array){
//   //Je teste si l'élément est positif 
//     if(element>0){
//   //On stocke ce résultat
//   //Et on additionne le nombre courant au résultat précédent    
//       resultat = resultat+element;
//     }
//   }
//   //On renvoit le résultat
//   return resultat;
// }
//   cl(sommeTab(array1));
//   // Résultat: 13



// 16)
// //Créez une fonction qui prend un parametre 'r' et qui
// //renvoie le périmetre d'un cercle. (2*PI*Rayon)
// const périmetreCercle = (r) => {
//   //TODO
// };

// function perimetreCercle(r){
// //Le périmetre sera égal à 2*PI*r
// let perimetre = 2*Math.PI*r;
// return perimetre;
// }
// let perimetresept = perimetreCercle(7);
// console.log(perimetresept);




// 17)
//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
// const capitalize = (word) => {
  //TODO
// };

// const capitalize = (word) => {  
//  return word[0].toUpperCase() + word.substring(1).toLowerCase();  
// }
//   cl(capitalize("SimPloN"));




//18) 
//Odd or Even
//Créez une fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.

// function pairImpair(n){ 
//   if(n%2 == 0){
//     return (" " + "pair");
//   }
//   else{
//     return ( " " + "impair");
//   }
// }
// cl(pairImpair(7));




//19)
//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
// //Aide : join(), split(), reverse()
// const reverseWord = (word) => {
//   //TODO
// };

// const reverseWord = (word) => {
//   const split = word.split(''); 
//   const reverse = split.reverse();
//   const resultat = reverse.join('');
//   return resultat;
// }

// cl(reverseWord("simplon"));




//20)
//créez une fonction qui renvoie la somme de tableau
// const nombres = ["3", "5", "6", "2"];

// const nombres = ["3", "5", "6", "2"];
// const StringtoNumber = nombres.map((i) => Number(i));
// cl(StringtoNumber);
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// cl(StringtoNumber.reduce(reducer));
// // Résultat dans la console : 16


