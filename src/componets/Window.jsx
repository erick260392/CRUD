import React, { useEffect, useState } from "react";





const Window = () => {
  
  const [screenSize,setscreenSize]= useState("pantalla grande")
  
  useEffect(() =>{
    
    
    const callback = () =>{
    
      if(window.innerWidth < 500){
            setscreenSize("pantalla chica")
      }else{
      
        setscreenSize("pantalla grande")
      
      }
    
    }
    
      window.addEventListener("resize", callback );


     return ()=>{
       
      window.removeEventListener("resize",callback)
       
       
    } 
  },[]);



    return (
        <div>
        <h1>{screenSize}</h1>
        </div>
    );
};

export default Window;