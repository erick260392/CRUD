import React from 'react';
import { useState } from 'react';

const Alert = () => {

    const [text,setText]= useState("")

    const AlertMessage =()=>{
      alert(text)
  
        }
  const ChangeText =() =>{
    setText("el otro texto")


  }
  
        console.log(text);
   
  

    return (
        <div>
           


<input type="text" onChange={ e => setText(e.target.value)} value={text}  />
<hr />
<p>
<button onClick={AlertMessage}>SEND MESSAGE</button>

</p>

<p>
    
    <button onClick={ChangeText}>CHANGE TEXT</button>
</p>
<h1>{text}</h1>

        </div>
    );
};

export default Alert;