import {useHistory} from 'react-router-dom'


import React from 'react'
import  './HomePageStyle.css'
import logo from '../img/labex.png'

    export const  HomePage =()=>{

        const history = useHistory()

        const goToAdminPage =()=>{
            history.push("/login")

        }

        const goToPublicPage=()=>{
            history.push("/public")
        }
    
    return(
            <div>
                <div id="logo"><img src={logo} alt="logo"/></div>
               <form>
                   <div className="initialFormContainer">
                            <div className="cardConfig">
                                <button className="btn" onClick={goToAdminPage}>Login privado</button>
                            </div>
                            <div className="cardConfig">
                                <button className="btn" onClick={goToPublicPage}>Login público</button>
                            </div>    
                   </div>
                   
               </form>
            </div>
    )

}


