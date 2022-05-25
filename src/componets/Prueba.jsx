import React from 'react';
import { useEffect,useState } from 'react';






const Prueba = () => {

  


  



  

    
  const [count, setCount] = useState(0)

  const [IsVisible,setIsVisible]=useState(false);



  useEffect(() =>{

    let colors =["#C34A36","#4E8397","#00C9A7","#845EC2"]
    document.body.style =`background:${colors[Math.floor(Math.random()*colors.length )]}`
  
  
  }, [count])


    return (



        <div>

<h2>{count}</h2>


<p>
<button type="button"  onClick={() => setCount((count) => count + 1)}>
  INCREMENTO
</button>



<button type="button" onClick={() => setCount((count) => count - 1)}>
  DECREMENTO
</button>
</p>
<div>
  <input type={IsVisible ? "text": "password"} />
  <button onClick={()=> setIsVisible(!IsVisible)} >show/hidden</button>
</div>




        </div>
    );
};

export default Prueba;





