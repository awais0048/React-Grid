
import React, { useState } from "react";

import './Kanban.css'
import Draggable from 'react-draggable';
import { useEffect } from "react";
const Kanban = () => {
  const [Kanban, setKanban] = useState([])
  // const fetchData = async () => {
  //   const res = await fetch('https://restcountries.com/v2/all')
  //   const data = await res.json()

 //   setKanban(data)
 // }
  useEffect(() => async () => {
   
  }, [])

  return (
   
     
        <div className="container-fluid">
          <div className="row">
            {Array.from(Kanban)?.map((el) => {

              return (
                <Draggable>
                <div className="col-md-4">
                  <div className="card card-1 ">
                    <li>{el.name}<br></br></li>
                    <img className="card" src={el.flag} height='100' width='150' alt="/" />
                    <li>{el.capital}</li><br />
                    <li> {el.subregion}</li><br />
                    <li>{el.region}</li><br />
                    <li>{el.population}</li><br />
                    <li>{el.area}</li>
                  </div>
                </div>
                </Draggable>
              )
               } )}
          
          </div>
          </div>
     
   
      
     
      )
}
export default Kanban