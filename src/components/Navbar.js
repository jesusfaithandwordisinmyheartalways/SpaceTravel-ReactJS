
import React from "react";
import { Link } from 'react-router-dom';


 function Navbar () {
   
    
   
  return (

    <>
     <ul className="Nav-Container">
          <div className="Nav-Wrapper">

          <div className="image-nav" ><img src="https://wallpapers.com/images/high/white-star-icon-graphic-9089kw9fw2jm38ia-2.png"></img></div>

          <div className="nav">
          <li className="home-link"><Link to="/">Home</Link></li> 
          </div>
          <div className="nav-two"> 
          <li className="about-link"><Link to="/about">Space Travel</Link></li>
          </div>
          
         
           
          </div>
        </ul>

    </>
      
  )
}

    


 export default Navbar