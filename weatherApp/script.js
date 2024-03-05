const apikey="b8bd4f676ce2913b500ded848ca2345f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
/*const x="https://api.openweathermap.org/data/2.5/weather?"*/
const search=document.querySelector('.search input');
const btn=document.querySelector('.search button');
const imageproducer=document.querySelector('.weather-icon');
async function checkWeather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.ok){
    var requiredData= await response.json();
    console.log(requiredData);
    document.querySelector('.city').innerHTML=requiredData.name;
    document.querySelector('.temp').innerHTML=Math.round (requiredData.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML=requiredData.main.humidity + "%";
    document.querySelector('.wind').innerHTML=requiredData.wind.speed +" km/h";

    if(requiredData.weather[0].main=='Clouds'){
        imageproducer.src="images1/clouds.png";
    }
    else if(requiredData.weather[0].main=='Clear'){
        imageproducer.src="images1/clear.png";
    }
    else if(requiredData.weather[0].main=='Rain'|| requiredData.weather[1].main=='Rain'){
        imageproducer.src="images1/rain.png";
    }
    else if(requiredData.weather[0].main=='Snow'){
        imageproducer.src="images1/snow.png";
    }
    else if(requiredData.weather[0].main=='Drizzle'){
        imageproducer.src="images1/drizzle.png";
    }
    else if(requiredData.weather[0].main=='Mist'){
        imageproducer.src="images1/mist.png";
    }
    document.querySelector('.weather').style.display="block";
}
}


btn.addEventListener('click',()=>{
    checkWeather(search.value);
})

