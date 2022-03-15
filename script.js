
const temp = document.querySelector('.temp');
const condition = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.getElementById('icon');
const form = document.getElementById('form');
const region = document.getElementById('city');
// const btn = document.getElementById('btn');

let cityinput = "london";
// function myfunction(){
//     console.log(form.value);
//     cityinput = form.value.toString();
//     getgeocode(cityinput);
//     console.log();
// }

btn.addEventListener('click', (e) => {
    if(form.value.length == 0){
        alert('Please Type A City Name')}
        else{
             cityinput = form.value.toString();
             fetchWeather(cityinput);
             form.value = '';
        }
        e.preventDefault()
    })


function removedata(){
    temp.innerHTML =  '' ;
    region.innerHTML = '' ;
    wind.innerHTML =  '';
    humidity.innerHTML = '';
    condition.innerHTML =  '';
    document.getElementById('weather').style.display = "none";
}    

// function getgeocode(cityinput){
//     fetch(`http://api.positionstack.com/v1/forward?access_key=44f361e6c9b9a847bb92131350766ff9&query=${cityinput}`)
//     .then(response => response.json())
//     .catch(function(error){
//         alert(error);
//     })
//     .then(data =>{
//         cityinput = data.data[0].latitude +","+ data.data[0].longitude ;
//         console.log(cityinput);
//         fetchWeather(cityinput);
//     }
//     )
// }



 function fetchWeather(city) {
     loading();
     fetch(`http://api.weatherapi.com/v1/current.json?key=a3a68c55e4e1460ba7a51503221303&q=${city}&aqi=no`)
     .then(response => response.json())
     .catch(function(error){
         alert(error);
         // document.getElementById('weather').style.display = "none";
        
    })
    .then(data =>{
        console.log(cityinput);
        console.log(data);
        if(condition.innerHTML.length > 0)
        removedata();
        temp.innerHTML =  data.current.temp_c + "°C" ;
        region.innerHTML = "Weather In " + data.location.name ;
        wind.innerHTML ="Wind : " + data.current.wind_kph + " Km/Hr";
        humidity.innerHTML = "Humidity " + data.current.humidity + "%";
        condition.innerHTML =  data.current.condition.text;
        icon.src =  data.current.condition.icon ;
        document.getElementById('weather').style.display = "block";
    }
    )

}


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("screen").style.display = "none";
}
function loading(){
    document.getElementById("loader").style.display = "block";
    document.getElementById("screen").style.display = "block";
    myFunction();
}


