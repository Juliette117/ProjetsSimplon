const moviesList = document.querySelector('#movies');
const keyword = document.querySelector('#keyword');
const button = document.querySelector('#movieButton');
const movieDefault = "batman";

const getMovie = (movieTitle) => {
const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=87ec7d51`;
fetch(url)
    .then(response => response.json())
    .then((data) => {
    if (data.Response){
        data.Search.forEach(movie => {
            moviesList.insertAdjacentHTML('beforeend', `
            <li>
               <img src="${movie.Poster}"/> 
               <h4>${movie.Title}</h4>
               <p>${movie.Year}</p>
            </li>
            `);
            });
        }
    })
    .catch((err) => {
        console.log('mon erreur est:' + err);
    });
   
}
getMovie(movieDefault)

button.addEventListener('click', (event) => {
    event.preventDefault("");
    moviesList.innerHTML = "";
    console.log(keyword.value);
   
    getMovie(keyword.value);
});





























// const weatherForm = document.querySelector('#weatherForm');
// const movieForm = document.querySelector('#movieForm');
// const movieInput = document.querySelector('#movieInput');

// // fonctions
// const seekMovies = async function (movie) {

//     movieInput.innerHTML = '';
//     const url = `http://www.omdbapi.com/?s=${movie}&apikey=87ec7d51`; 
//     console.log(url);
//     const universe = await (await fetch(url)).json();

//     universe.Search.forEach(movie => {
//         console.log(movie.Title, movie.Year);
//         document.querySelector('.imgContainer').insertAdjacentHTML(
//             'beforeend',
//             `
//             <li>
//             <img src="${movie.Poster}"/>
//             <h4>${movie.Title}</h4>
//             </li>
        
//         `
//         );
//     });
// };

// const fetchWeather = async function (town) {
//     // url à laquelle on interpole la saisie utilisateur
   

//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=67173c519205d685b546a19f56219ebc&lang=fr`;

//     // requête météo
//     const townWeather = await (await fetch(url)).json();

//     // variables
//     const weatherContainer = document.querySelector('.weatherContainer');
//     const townTemp = Math.trunc(townWeather.main.temp - 273.15);
//     const townSky = townWeather.weather[0].description;
//     let icon;
//     console.log(townSky);

//     switch (townSky) {
//         case 'couvert':
//             icon = `./img/001-cloudy day.png`;
//             break;
//         case 'ensoleillé':
//             icon = `./img/002-sunny.png`;
//             break;
//         case 'nuageux':
//             icon = `./img/005-cloudy.png`;
//             break;
//         case 'partiellement nuageux':
//             icon = `./img/005-cloudy.png`;
//             break;
//         case 'ciel dégagé':
//             icon = `./img/002-sunny.png`;
//             break;
//     }

//     weatherContainer.innerHTML = '';

//     weatherContainer.insertAdjacentHTML(
//         'beforeend',
//         `   
//             <div id="weather">
//                 <p>Aujourd'hui à ${town}, il fait ${townTemp} °C et le temps est ${townSky}. </p>
//                 <img src="${icon}" id="weatherIcon" />
//             </div>
            

//         `
//     );
// };

// fetchWeather('Marseille');
// seekMovies('Marvel');

// // events

// weatherForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const town = document.querySelector('#weatherInput').value;
//     fetchWeather(town);
// });

// movieForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const movie = document.querySelector('#movieInput').value;
//     seekMovies(movie);
// });























// const moviesList = document.querySelector("#movies");   // mon UL
// const movieSearchFilm = document.querySelector("#keyword"); // Mon input de recherche
// const submitButton = document.querySelector("#movieButton"); // Mon bouton submit

// const rechFilm = (batman) => {
//     moviesList.innerHTML = '';  // je vide le contenu de mon UL
    
//     const url = `http://www.omdbapi.com/?s=${keyword.value}&apikey=87ec7d51`;  // URL de l'API à interroger
//     fetch(url)  // j'interroge le server → url
//     .then(response => response.json()) // si réponse, alors je parse cette réponse au format JSON
//     .then((data) => {   // puis je récolte les données (sous forme de tableau JSON)
//         console.log(data);  // j'affiche en console pour voir si ça fonctionne bien
//         if(data.Response){
//             data.Search.forEach(movie => {   // je boucle sur ces données (puisque c'est un tableau)
//                 // j'écris les données dans le UL de la page html
//                 moviesList.insertAdjacentHTML('beforeend', `
//                     <li>
//                         <img src="${movie.Poster}" />
//                         <h4>${movie.Title}</h4>
//                     </li>
//                 `);
//             });
//         }
//     })
//     .catch((err) => {   // fonction pour gérer les erreurs
//         console.log('mon erreur est :' + err);  // si erreur(s) j'affiche laquelle en console
//     });
    
//     movieSearchFilm.value = ''; // je vide le contenu de mon INPUT
// };

// submitButton.addEventListener('click', () => {  // j'écoute mon bouton au clic
//    rechFilm(movieSearchFilm.value); // j'exécute ma fonction
// })
// movieSearchFilm.addEventListener('keyup', (event) => {  // j'écoute mon INPUT au keyup avec comme paramètre un event
//     if(event.keyCode == 13){    // si l'event est la touche "entrée"
//         rechFilm(movieSearchFilm.value);    // alors j'exécute ma fonction
//     }
//  })





// // ----------------FONCTIONNE----------------------------// //

// var form = document.querySelector("form");
// var input = document.querySelector('input[type="text"]');
// var resultO = document.querySelector(".omdb-result");
// var resultT = document.querySelector(".tmdb-result");

// function movieResult(source, poster, name, year) {
//   var resultItem = document.createElement("div");
//   var movieTitle = document.createElement("h4");
//   var releaseYear = document.createElement("p");
//   var img = document.createElement("img");

//   movieTitle.innerHTML = name;
//   releaseYear.innerHTML = year;
//   img.src = poster;

//   resultItem.appendChild(img);
//   resultItem.appendChild(movieTitle);
//   resultItem.appendChild(releaseYear);

//   if (source === "omdb") {
//     resultO.appendChild(resultItem);
//   } else {
//     resultT.appendChild(resultItem);
//   }
// }

// function search(e) {
//   e.preventDefault();
//   resultO.innerHTML = "";
//   resultT.innerHTML = "";
//   var searchTitle = input.value;
//   makeTRequest(searchTitle);
//   makeORequest(searchTitle);
//   input.value = "";
// }

// // for OMDb
// var apiKeyO = "87ec7d51";
// var urlO = "https://www.omdbapi.com/?apikey=" + apiKeyO + "&type=movie" + "&s=";

// function makeORequest(searchTitle) {
//   xhr = new XMLHttpRequest();

//   xhr.onload = function() {
//     var response = JSON.parse(this.responseText).Search;
//     // console.log(response);
//     response.map(function(item) {
//       movieResult("omdb", item.Poster, item.Title, item.Year);
//     });
//   };
//   xhr.open("GET", urlO + searchTitle, true);
//   xhr.send();
// }

// // for TMDb
// var apiKeyT = "0f79586eb9d92afa2b7266f7928b055c";
// var urlT =
//   "https://api.themoviedb.org/3/search/movie?api_key=" + apiKeyT + "&query=";
// function makeTRequest(searchTitle) {
//   xhr = new XMLHttpRequest();

//   xhr.onload = function() {
//     var response = JSON.parse(this.responseText).results;
//     // console.log(response);
//     response.map(function(item) {
//       movieResult(
//         "tmdb",
//         "https://image.tmdb.org/t/p/w300/" + item.poster_path,
//         item.title,
//         item.release_date
//       );
//     });
//   };
//   xhr.open("GET", urlT + searchTitle, true);
//   xhr.send();
// }

// form.addEventListener("submit", search);



// // ----------------FONCTIONNE----------------------------// //
