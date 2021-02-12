
// const city = document.querySelector("#place")
// const keyword = document.querySelector("#keyword")
// const coordmap = document.querySelector("#coord")
// const btn = document.querySelector("#button");
// const lat = 36.9;
// const long = 7.7667;






// //Autocompletion
// keyword.addEventListener("keyup", (event) => {
//     // console.log(keyword.value)
//     event.preventDefault();
//     const url = `https://places-dsn.algolia.net/1/places/query`;
//     fetch(url, {
//         method: "POST",
//         body: JSON.stringify({query: keyword.value})    
// })
// .then(response => response.json())
// .then((data) => {
//         city.innerHTML = "";
//         data.hits.forEach(element => {
//             console.log(element.locale_names.default)
//             city.insertAdjacentHTML('beforeend', `
//             <button class= "li">${element.locale_names.default}</button>  
//             `);
//             //PAS BON
//             coordmap.insertAdjacentHTML('beforeend', `
//             <div class= "geoloc">${element._geoloc.lat + "," + element._geoloc.lng}</div>
            
//             _`);
//             });    
//             const elemList = document.querySelectorAll(".li")
// for (let i = 0; i < elemList.length; i++) {
// console.log(elemList[i])
// const element = elemList[i]
// element.addEventListener('click',() =>  {
//   console.log(elemList[i])
// })
// };
//     })
   

//     .catch((err) => {
//         console.log(err);
// })





// //Button result
// city.addEventListener('click', (event) => {
//   event.preventDefault("");
// city.innerHTML = "";
//   // console.log(keyword.value);
// });


// // coordmap.addEventListener('click', (event) => {
// //   event.preventDefault("");
// //   coordmap.innerHTML = "";
// //   console.log(coordmap.value)
// // });






// // );

// // let removemap;
 
// //  coordmap = (at, lng) => {
// //     if (removemap !== undefined) {
// //       removemap.remove();
// //     }
// //  }




// // //mapbox
// // let map = L.map('map').setView([35.689487, 139.691706], 2); 
//  let map = L.map('map').setView([lat, long], 7);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVsaWV0dGUxMTciLCJhIjoiY2trejd6djc2MGdzZjJvcW9sczl6eWVxNyJ9.RVsEwU9XFHuaRnwymBYbjA', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoianVsaWV0dGUxMTciLCJhIjoiY2trejd6djc2MGdzZjJvcW9sczl6eWVxNyJ9.RVsEwU9XFHuaRnwymBYbjA'
// //   });
// //     map.addLayer(tiles);

// //  new L.Control.GPlaceAutocomplete({
// //      callback: function(place){
// //          var loc = place.geometry.location;
// //          ville = [data[0].lat, data[0].lon]
// //          map.panTo(ville);
// //          map.setZoom(18);
// //     }
// }).addTo(map);


// // const url = `http://api.openweathermap.org/data/2.5/weather?q=${keyword.value}&units=metric&APPID=1d63deac7dbf7321ce6f1a2acea789d9`;
// // fetch(url)
// //     .then(res => res.json())
// //     // .then(res => console.log(res))
// //     .then((data) => {
// //         console.log(data.coord)
// //         mymap.setView([data.coord.lat, data.coord.lon], 10);
// //         var marker = L.marker([data.coord.lat, data.coord.lon]).addTo(map);


// //     })




// btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(keyword.value);
// })

// })




// //leaflet
//   var placesAutocomplete = places({
//     appId: 'plHN8PKID6JK',
//     apiKey: 'b8676b271c3c8e96e7a54e70bd7461e0',
//     container: keyword,
//     type:'city',
//     aroundLatLngViaIP: false
//   });




// //   const algoliaPlacesAppId = 'plHN8PKID6JK';
// //   const algoliaPlacesApiKey = 'b8676b271c3c8e96e7a54e70bd7461e0';
// //   const mapboxToken = 'pk.eyJ1IjoianVsaWV0dGUxMTciLCJhIjoiY2trejd6djc2MGdzZjJvcW9sczl6eWVxNyJ9.RVsEwU9XFHuaRnwymBYbjA';
 






const keyword = document.querySelector("#keyword")
const btnOk = document.querySelector("#button");
const city = document.querySelector('#monUl');
const lat = 35.689487;
const lng = 139.691706;
const map = L.map('mapid').setView([lat, lng], 10);




//auto compliton du champ
keyword.addEventListener('keyup', (event) => {
    event.preventDefault();
    console.log(keyword.value);

    const url = `https://places-dsn.algolia.net/1/places/query`;
    fetch(url, {
            method: "POST",
            body: JSON.stringify({ query: keyword.value })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            city.innerHTML = '',
                data.hits.forEach(element => {
                    console.log(element.locale_names.default)
                    city.insertAdjacentHTML('beforeend', `
                <button class= "li">${element.locale_names.default}</button>  
                `)
                });
                
        })
        .catch((err) => {
                    console.log(err);
            })

const elemList = document.querySelectorAll(".li")
    for (let i = 0; i < elemList.length; i++) {
          console.log(elemList[i])
const element = elemList[i]
    element.addEventListener('click',() =>  {
      console.log(elemList[i])
     })
   };

});



//mapGéo
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVsaWV0dGUxMTciLCJhIjoiY2trejd6djc2MGdzZjJvcW9sczl6eWVxNyJ9.RVsEwU9XFHuaRnwymBYbjA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // accessToken: 'your.mapbox.access.token'
}).addTo(map);
//Marqueur
var marker = L.marker([lat, lng]).addTo(map);


btnOk.addEventListener('click', (event) => {
    event.preventDefault();


    // console.log(keyword.value);

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${keyword.value}&units=metric&APPID=1d63deac7dbf7321ce6f1a2acea789d9`;
    fetch(url)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then((data) => {
            console.log(data.coord)
            map.setView([data.coord.lat, data.coord.lon], 10);
            var marker = L.marker([data.coord.lat, data.coord.lon]).addTo(map);
            //map = L.map('mapid').setView([data.coord.lat, data.coord.lon], 10);
            //refresh
            //sinon supprimer 

        })

})

