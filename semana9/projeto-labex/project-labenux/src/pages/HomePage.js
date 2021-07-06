import React from 'react'
import  './HomePageStyle.css'
import logo from '../img/labex.png'

export default function HomePage(){
    return(
            <div>
                <div id="logo"><img src={logo} alt="logo"/></div>
               <form>
                   <div className="initialFormContainer">
                            <div className="cardConfig">
                                <button className="btn">Login privado</button>
                            </div>
                            <div className="cardConfig">
                                <button className="btn">Login público</button>
                            </div>    
                   </div>
                   
               </form>
            </div>
    )

}
