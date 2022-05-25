import axios from 'axios';
import { useState,useEffect } from 'react';

const Emoji = () => {

    const [ emoji, setemoji ] = useState({})
  
    useEffect(() => {
        axios.get("https://api.emojisworld.fr/v1/random?limit=1")
            .then(res => setemoji(res.data));
    }, [])


  console.log(emoji);




    return (
        <div>


              <h1>{emoji.results?.[0].name}</h1>
              <h2>{emoji.results?.[0].emoji}</h2>




          
            
        </div>
    );
};

export default Emoji;