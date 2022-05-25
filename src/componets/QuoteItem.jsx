import React from "react";
import quotes from '../quotes.json'

const QuoteItem = () => {
  return (
  
    <div >



      <ul>
        {quotes.map( quote =>(
         <div className="user" >
           <div key={quote.quote} >{quote.quote} <b> {quote.author}</b> </div>

         </div>
        ))}
      </ul>




    </div>

   
  );
};

export default QuoteItem;