window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/corsdemo';
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff3aebc189272a372a166ca3dbeba897`;


        fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
      });


      
    }
});