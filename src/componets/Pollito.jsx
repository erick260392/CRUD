import React, { useEffect, useState } from 'react';








const Pollito = () => {

const [ShowChicken,setShowChicken] = useState (true)





    return (
        <div>


<button  onClick={() =>setShowChicken(!ShowChicken)}>
MOSTRAR/OCULTAR POLLITO
</button>

{

    ShowChicken ?
<img src="https://t2.uc.ltmcdn.com/es/posts/4/9/6/como_cuidar_de_un_pollito_27694_600_square.jpg" alt="" />

:

<h3>chicken occult</h3>

}

        </div>
    );
};

export default Polllito;