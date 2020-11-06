
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




