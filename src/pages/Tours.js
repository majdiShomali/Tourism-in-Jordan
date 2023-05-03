import React from 'react'
import petra from './petra.jpeg'; //
import sea from './sea.jpeg'; //
import { useState, useEffect } from "react";
const Tours = () => {

    const [first, setfirst] = useState([
        {
         Id:0,
         name:"petra",
         info:"petra information",
         images:petra,
         price:10
        },
        {
          Id:1,
          name:"dead sea",
          info:"dead sea information",
          images:sea,
          price:10
         }
      
      ])


      function aa(info){
        console.log(info)
    }




  return (

    <>
           <div className="cardContainer">
        {first.map((value) => {
          return (
            

              <div className="card" onClick={() => aa(value.info)}>
                <h3>{value.name}</h3>
                <img src={value.images} />
          
              </div>
              

          );
        })
        
  
        }

      </div>
    
    
    
    </>



  )
}

export default Tours