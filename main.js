//api.openweathermap.org/data/2.5/weather?q=London
let APIKEY = '11b676417ec73308d3d911314f449db1'

   document.querySelector('.location').addEventListener('click', getFetch)
  
    
    function getFetch(){
      const city = document.querySelector('input').value
      console.log(city)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`
    
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    
}
    
