const apikey = "c899ba871a8147025b5856a2f37660bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");
const  now = new Date()
const hours = String(now.getHours())
const minutes = String(now.getMinutes())
const seconds = String(now.getSeconds())
const currentTime = `${hours}:${minutes}:${seconds}`

const year = now.getFullYear()
const month = String(now.getMonth() + 1)
const day = String(now.getDate())
const currentDate = `${day}-${month}-${year}`


async function checkweather (city) {
    let response= await fetch(apiUrl + city + `&appid=${apikey}`);
    let data=await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML=data.name
  document.querySelector(".temp").innerHTML= Math. floor(data.main.temp)+"°c"
  document.querySelector(".humidity").innerHTML=Math.floor(data.main.humidity)+"%"
  document.querySelector(".wind").innerHTML= Math.floor (data.wind.speed)+"km/hr"
  if (data.weather[0].main == "Snow") {
     weatherIcon.src="images/snow.png"
     document.querySelector(".card").style.backgroundImage =
  "url(./gif/snow.gif)"
 }else if (data.weather[0].main=="Clouds") {
     weatherIcon.src="images/clouds.png"
     document.querySelector(".card").style.backgroundImage=
     "url(./gif/cloud.gif)"
 }else if (data.weather[0].main=="Drizzle") {
     weatherIcon.src="images/drizzle.png"
     document.querySelector(".card").style.backgroundImage=
     "url(./gif/drizzle.gif)"
 }else if (data.weather[0].main=="Haze") {
     weatherIcon.src="images/hazepng"
    document.querySelector(".card").style.backgroundImage=
     "url(./gif/haze.gif)"
 }else if (data.weather[0].main=="Mist") {
     weatherIcon.src="images/mist.png" 

 }else if (data.weather[0].main=="Rain") {
     weatherIcon.src="images/rain.png" 
     document.querySelector(".card").style.backgroundImage=
     "url(./gif/rain.webp)"
    }else{ weatherIcon.src="images/humidity.png" 
        document.querySelector(".card").style.backgroundImage=
        ""
    }
  document.querySelector(".weather").style.display="block"
  document.querySelector(".date").innerHTML = currentDate
  document.querySelector(".time").innerHTML = currentTime
  }
     
 


searchBtn.addEventListener('click',()=> {
     checkweather(searchBox.value);
    
})

searchBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter"){
        checkweather(searchBox.value);
    }
 
})