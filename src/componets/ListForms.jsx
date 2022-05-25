import React from 'react';

const ListForms = ({Towork}) => {
    return (
        <div>
 <ul className="products-list">
      {Towork.map((Work) => (
        <li key={Work.id}>
          <h3>{Work.ToDo}</h3>
          <p>
            <b>Descripcion </b> {Work.Descripcion}
          </p>
           <p>
            <b>Is Available: </b> {Work.Check.toString()}
          </p>
        </li>
      ))}
    </ul>
        </div>
    );
};

export default ListForms;