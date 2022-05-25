import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RickItem = ({url}) => {


    const [Residents,setResidents] = useState({});

useEffect (() =>{


    axios.get(`${url} `)
    .then(res =>setResidents(res.data))


 
},[]);




console.log(Residents);

    return (

        <div  >
            <ul >
                <div className='card'>
                <li key={Residents.name}>
                <img src={Residents.image} alt="" />
                   <div className='subcard' >

<section>  <h2> {Residents.name} </h2></section>
<article>
<p className='status'><span className='circle green'></span>Status:{Residents.status}</p>
<p> <span>Origin:{Residents.origin?.name} </span></p>
<p><span>Num Episodies: {Residents.episode?.length} </span></p>
</article>

                   </div>
                 </li>

                </div>
            </ul>
        </div>





    );
};

export default RickItem;