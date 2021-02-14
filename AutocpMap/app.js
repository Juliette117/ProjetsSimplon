const keyword = document.querySelector("#keyword")
const btn = document.querySelector("#button");
const city = document.querySelector('#ul');
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
 city.addEventListener('click', (event) => {
    event.preventDefault();


    // console.log(keyword.value);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${keyword.value}&units=metric&APPID=1d63deac7dbf7321ce6f1a2acea789d9`;
    fetch(url)
        .then(response => response.json())
        // .then(response => console.log(res))
        .then((data) => {
            console.log(data.coord)
            map.setView([data.coord.lat, data.coord.lon], 10);
            var marker = L.marker([data.coord.lat, data.coord.lon]).addTo(map);
            //map = L.map('mapid').setView([data.coord.lat, data.coord.lon], 10);
            //refresh
            //sinon supprimer 

        })

    })

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




