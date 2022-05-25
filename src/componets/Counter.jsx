import React from 'react';
import { useState } from 'react';






const Counter = () => {




const [count,setCount] = useState(0)

    return (
        <div>


        <h1> {count} </h1>


        {
            count % 2=== 0 ? <h3>Es par</h3> : <h3>Es impar</h3>
        }

        <p>

          <button type="button"  onClick={() => setCount((count) => count + 1)}>
  INCREMENTO
</button>

<button type="button" onClick={() => setCount((count) => count - 1)}>
  DECREMENTO
</button>
</p>

  
        </div>
    );
};

export default Counter;