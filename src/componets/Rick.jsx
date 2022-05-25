import axios from 'axios';
import React, { useState } from 'react';
import {useEffect} from 'react'
import RickItem from './RickItem';






const Rick = () => {

    const [location,setlocation]=useState({});
    const [id,setId]=useState("");



    useEffect (()=> {


        const LocationID = Math.floor(Math.random() * 126)+1;
        axios.get( `https://rickandmortyapi.com/api/location/${LocationID}` )
        .then(res=> setlocation(res.data))
        
      },[]);
      
      console.log(location);
     const SerchId = () => {

axios.get(`https://rickandmortyapi.com/api/location/${id}`)
.then(res=>setlocation(res.data))
 

    }


  
    return (
        <div>
          <header>
<div className='Serch'>

          <input type="text" onChange={e =>setId(e.target.value)} 
          value= {id} />
          <button  onClick={SerchId} > SERCH</button>
</div>
          </header>
        <section className='title'>
          <h2> {location.name} </h2>
<article className='subtitle'>
          <p><span>Dimension: {location.dimension} </span> </p>
          <p><span>Type: {location.type}</span></p>
          <p><span>Population: {location.residents?.length}</span></p>

</article>
        </section>


<ul className='Rick-list'>

{location.residents?.map(Residents =>
<li key={Residents}>
   <RickItem key={Residents} url={Residents} />
</li>
  )}
  

  </ul>

        </div>

    );
};

export default Rick;