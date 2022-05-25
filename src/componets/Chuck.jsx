import React from 'react';
import axios from 'axios';

import { useState,useEffect } from 'react';







const Chuck = () => {


    const [ chuck, setChuck ] = useState({})
  
    useEffect(() => {
        axios.get("https://api.chucknorris.io/jokes/random")
            .then(res => setChuck(res));
    }, [])






    return (
        <div>
              <h1>Chuck Norris</h1>
            <p>{chuck.data?.value}</p>
        </div>
       
    );
};

export default Chuck;