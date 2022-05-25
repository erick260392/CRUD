import React from 'react';
import { useState } from 'react';





const ProductsForms = () => {
  const [ToDo, setToDo] = useState("");
        const [Description, setDescription] = useState("");
        const [isAvailable, setIsAvailable] = useState(false);
      
        const submit = (e) => {
          e.preventDefault();
          const product = {
            ToDo,
            Description,
            isAvailable,
          };
          console.log(product);
        };


  return (
    <div>
       <form onSubmit={submit}>
<div  >
<label htmlFor="Work">To Do</label>
<input type="text" id='Work' onChange={(e) => setToDo(e.target.value)}
          value={ToDo} />
</div>

<div  >
<label htmlFor="Description">Descrition</label>
<input type="text" id='Description'  onChange={(e) => setDescription(e.target.value)}
          value={Description} />
</div>

<div  >
<label htmlFor="IsAvaible">Check</label>
<input type="checkbox" id='IsAvaible"'   checked={isAvailable} // checked es equivalente a value
          onChange={(e) => setIsAvailable(e.target.checked)} />
</div>

<button> submit</button>

            </form>
    </div>
  );
};

export default ProductsForms;


  