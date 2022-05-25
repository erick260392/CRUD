import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';




const Weather = () => {


    const[weather,setweather]=useState({})
    const [degrees,setdegrees] = useState (true)
    const [isLoading,setIsLoading]=useState(true)
 
   


useEffect(()=>{






  


  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=1f836b84d5a703c7209e8db3eb790224`)
          .then(res=> {
            setweather(res.data);
             setIsLoading(false);
          
            })
  };
  



  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
  


},[])

console.log(weather)

const kelvin= `${weather.main?.temp} `  
let Celcuis= Math.floor(kelvin-273)
console.log(kelvin);
console.log(Celcuis);

  
  
    return (


<div className='Weather'>



{
   isLoading ? (
    <h1>Esta cargando...</h1>
) : (

<div className='weather_app'>

<h1>Wheater App</h1>

 <h2> <i class="fa-solid fa-location-dot"></i> {weather.name}, {weather.sys?.country} </h2> 
 <div className="description">
 <h3> "{weather.weather?.[0].description}"</h3>
 </div>

<h2> <i class="fa-solid fa-wind"> </i> Wind Speed: {weather.wind?.speed} m/s </h2>
<h2> <i class="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all} %</h2>
<h2> <i class="fa-solid fa-temperature-high"></i> Pressure: {weather.main?.pressure} mb </h2>

<div className='weather_img'>
<img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
</div>






{

degrees ?

<h2>{Celcuis} C° </h2>

:
<h2> {kelvin} K° </h2>

}




<button  onClick={() =>setdegrees(!degrees)}>
kelvin/celcuis
</button>

</div>

)
}
   

   
        </div>
    );
};

export default Weather;