const apiKey="6188cbb8b9137ce4dba11627bd1c35e6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")
const bodyimg= document.querySelector("body");
async function checkWeather(city) {
const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
if(response.status== 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}
else{
var data=await response.json();
console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";
document.querySelector(".error").style.display="none";

if(data.weather[0].main== "Clouds" ){
    weatherIcon.src="clouds.png";
    document.querySelector("body").style.backgroundImage="url('cloudgif.gif')";
}
else if(data.weather[0].main== "Clear"){
    weatherIcon.src="clear.png";
    document.querySelector("body").style.backgroundImage="url('cleargif.gif')";
}
else if(data.weather[0].main== "Drizzle"){
    weatherIcon.src="drizzle.png";
    document.querySelector("body").style.backgroundImage="url('drizzlegif.gif')";
}
else if(data.weather[0].main== "Mist"){
    weatherIcon.src="mist.png";
    document.querySelector("body").style.backgroundImage="url('mistgif.gif')";
}
else if(data.weather[0].main== "Rain"){
    weatherIcon.src="rain.png";
    document.querySelector("body").style.backgroundImage="url('raingif.gif')";
}
else if(data.weather[0].main== "Snow"){
    weatherIcon.src="snow.png";
    document.querySelector("body").style.backgroundImage="url('snowgif.gif')";
}

document.querySelector(".weather").style.display="block";
}}
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        checkWeather(searchBox.value);
}})
checkWeather();
