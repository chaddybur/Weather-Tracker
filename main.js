//api.openweathermap.org/data/2.5/weather?q=London


   document.querySelector('.location').addEventListener('click', getFetch)
  
    
    function getFetch(){
      const city = document.querySelector('input').value
      console.log(city)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`
    
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            let city = data.name
            let current = data.main.temp
            let weather = data.weather[0].main
            let high = data.main.temp_max
            let low = data.main.temp_min
           
            let anchor = document.querySelector(".info")
            let list = document.createElement("ul")
            let l1 = document.createElement("li")
            let l2 = document.createElement("li")
            let l3 = document.createElement("li")
            let l4 = document.createElement("li")
            let l5 = document.createElement("li")
            
            l1.innerText = `City: ${city}`
            l2.innerText = `Weather: ${weather}`
            l3.innerText = `Temperature: ${current}`
            l4.innerText = `High: ${high}`
            l5.innerText = `Low: ${low}`

            anchor.appendChild(list)
            list.appendChild(l1)
            list.appendChild(l2)
            list.appendChild(l3)
            list.appendChild(l4)
            list.appendChild(l5)


           
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    
}
    


//main: {temp: 48.42, feels_like: 41.85, temp_min: 46.02, temp_max: 52.99, pressure: 1009, …}
//name: "Chicago"
//weather: Array(1)
//0: {id: 500, main: 'Rain', description: 'light rain', icon: '10d'}
