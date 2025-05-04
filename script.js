const button = document.getElementById("getWeatherBtn");
const input = document.getElementById("cityInput");

const cityName= document.getElementById("city-name");
const cityTime= document.getElementById("city-time");
const cityTemp= document.getElementById("city-temp");
async function getData(cityName) {

    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=ca77b70708c54fcab9354718250405&q=${cityName}&aqi=yes`);

    return await promise.json();
}

button.addEventListener("click", async () => {
    const result=await getData(input.value); 
    cityName.innerText=`${result.location.name}, ${result.location.region}-${result.location.country}`;
    cityTime.innerText=`City Time: ${result.location.localtime}`; 
    cityTemp.innerText=`City Temperature: ${result.current.temp_c}°C`; 
    console.log(result); 
});

// http://api.weatherapi.com/v1/current.json?key=ca77b70708c54fcab9354718250405&q=London&aqi=yes