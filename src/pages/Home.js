import React from 'react'
import "./home.css"
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Home  = (props) => {
 
  const [myState, setState] = useState(props.initState5)
  const [id0, setId] = useState()
  const [info0, setinfo] = useState("")


  function ShowMore(id,info){
    setId(id)
    setinfo(info)
  }

  
  return (
   <>
         {/*------------------ Accounts card --------------------------*/}
         <div className="cardContainer">
        {myState.map((value) => {
          return (
            <>
             
         
              <div className="card" >
              <img src={value.images} />
                <p>{value.name}</p>
                <button onClick={()=>ShowMore(value.Id,value.info)}>Show more</button>
                  
                  {
                
                value.Id===id0 ? <><p>{info0}</p></> :<><p></p></> 

                  }



              </div>
              
             
              
            </>
          );
        })
        
  
        }

      </div>

 
   </>
  )
}

export default Home 