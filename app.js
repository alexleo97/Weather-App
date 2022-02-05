window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ff3aebc189272a372a166ca3dbeba897`;


        fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data => {
          console.log(data);
          const {temp} = data.main;
          const {description, icon} = data.weather[0];
          const {name} = data.name;
          const celsius = temp - 273;
          let fahrenheit = Math.floor(celsius * (9/5) + 32);
          
          //set DOM Elements form the api
          temperatureDegree.textContent = fahrenheit;
          temperatureDescription.textContent = description;
          locationTimezone.textContent = name;
          
        });
      });

          //http://openweathermap.org/img/wn/${icon}@2x.png
          //icon website
      
    }


});