const vols = [{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '12/12/2020',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '12/11/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
}
];



//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)
//   vols.forEach(element => {
//   console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
// });
  

//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
// vols.forEach(element => {
//   if(element.dureeTrajet < 7) {
//     console.log(element);
// }
// });


//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
// vols.forEach(element => {
//   if(element.destination === "Tokyo" && element.compagnie_aerienne === "Air france") {
//     console.log(element);
//   }
// });


//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france
// vols.forEach(element => {
//   if (element.prix < 700 && element.compagnie_aerienne === "Air france") {
//     console.log(element.destination);
//   }
// })


//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures
// vols.forEach(element => {
//   if(element.compagnie_aerienne === "Lufthansa" && element.prix < 900 && element.dureeTrajet < 15 ) {
//     console.log(element);
//   }
// })


//Appliquer une reduc de 20% sur chaque vol à destination de Tokyo.
// vols.forEach((element) => {
//   if (element.destination === 'Tokyo'){
//     console.log(element.destination);
//     console.log(element.prix * 0.8);
//   }
//   });



//Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher

// const date = new Date (12/12/2020);
//BROUILLON
// vols.forEach((element) => {
// const dateYear = element.date_depart.split('/');
// if (dateYear[2] > '2019'){
//   console.log(element.date_depart);
// }
// }); 






//Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".

// const startingDate = new Date () => { 
//   const limitDate = new Date
//    if 
//   }
//   console.log()

//----------------------------------------------------------------------------------



//Afficher tous les vols à partir de la date d'aujourd'hui

//Un petit coup de main...
//Il faut récupèrer la date du jour avec l'objet 'date' (new Date()) fournis par Javascript.

//La fonction suivante permet de comparer deux dates et renvoie 'true' si date1 est supérieur à date2
//Pour comparer deux, celles-ci doivent avoir le même format.
const date1SupDate2 = (date1, date2) => {
  startDate = new Date(date1);
  endDate = new Date(date2);
  if (startDate > endDate) {
    return true;
  } else {
    return false;
  };
};


console.log(date1SupDate2("12/13/2020", "12/12/2020"));



//Allez voir ce qu'est un JSON !
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON