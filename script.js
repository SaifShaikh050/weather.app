const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4c606c7109mshcc27b482d9df389p1ffd83jsn8713d1501de6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const weather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      document.getElementById('feels_like').innerHTML = response.feels_like;
      document.getElementById('humidity').innerHTML = response.humidity;
      document.getElementById('humidity2').innerHTML = response.humidity;
      document.getElementById('max_temp').innerHTML = response.max_temp;
      document.getElementById('min_temp').innerHTML = response.min_temp;
      document.getElementById('sunrise').innerHTML = response.sunrise;
      document.getElementById('sunset').innerHTML = response.sunset;
      document.getElementById('temp').innerHTML = response.temp;
      document.getElementById('temp2').innerHTML = response.temp;
      document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
      document.getElementById('wind_speed').innerHTML = response.wind_speed;
      document.getElementById('wind_speed2').innerHTML = response.wind_speed;
      console.log(response);
    })
    .catch((err) => console.error(err));

  document.getElementById("cname").innerHTML = city;
};

srch.addEventListener("click", (e) => {
  e.preventDefault();
  let a = document.getElementById("txt").value;
  weather(a);
});

weather("dehli");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    document.getElementById('mcloud_pct').innerHTML = response.cloud_pct;
    document.getElementById('mfeels_like').innerHTML = response.feels_like;
    document.getElementById('mhumidity').innerHTML = response.humidity;
    document.getElementById('mmax_temp').innerHTML = response.max_temp;
    document.getElementById('mmin_temp').innerHTML = response.min_temp;
    document.getElementById('msunrise').innerHTML = response.sunrise;
    document.getElementById('msunset').innerHTML = response.sunset;
    document.getElementById('mtemp').innerHTML = response.temp;
    document.getElementById('mwind_degrees').innerHTML = response.wind_degrees;
    document.getElementById('mwind_speed').innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=ahmedabad",
  options
)
  .then((response) => response.json())
  .then((response) => {
    document.getElementById('acloud_pct').innerHTML = response.cloud_pct;
    document.getElementById('afeels_like').innerHTML = response.feels_like;
    document.getElementById('ahumidity').innerHTML = response.humidity;
    document.getElementById('amax_temp').innerHTML = response.max_temp;
    document.getElementById('amin_temp').innerHTML = response.min_temp;
    document.getElementById('asunrise').innerHTML = response.sunrise;
    document.getElementById('asunset').innerHTML = response.sunset;
    document.getElementById('atemp').innerHTML = response.temp;
    document.getElementById('awind_degrees').innerHTML = response.wind_degrees;
    document.getElementById('awind_speed').innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=goa",
  options
)
  .then((response) => response.json())
  .then((response) => {
    document.getElementById('gcloud_pct').innerHTML = response.cloud_pct;
    document.getElementById('gfeels_like').innerHTML = response.feels_like;
    document.getElementById('ghumidity').innerHTML = response.humidity;
    document.getElementById('gmax_temp').innerHTML = response.max_temp;
    document.getElementById('gmin_temp').innerHTML = response.min_temp;
    document.getElementById('gsunrise').innerHTML = response.sunrise;
    document.getElementById('gsunset').innerHTML = response.sunset;
    document.getElementById('gtemp').innerHTML = response.temp;
    document.getElementById('gwind_degrees').innerHTML = response.wind_degrees;
    document.getElementById('gwind_speed').innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    document.getElementById('kcloud_pct').innerHTML = response.cloud_pct;
    document.getElementById('kfeels_like').innerHTML = response.feels_like;
    document.getElementById('khumidity').innerHTML = response.humidity;
    document.getElementById('kmax_temp').innerHTML = response.max_temp;
    document.getElementById('kmin_temp').innerHTML = response.min_temp;
    document.getElementById('ksunrise').innerHTML = response.sunrise;
    document.getElementById('ksunset').innerHTML = response.sunset;
    document.getElementById('ktemp').innerHTML = response.temp;
    document.getElementById('kwind_degrees').innerHTML = response.wind_degrees;
    document.getElementById('kwind_speed').innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
