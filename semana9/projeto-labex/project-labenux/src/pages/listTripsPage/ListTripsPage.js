import { useHistory } from "react-router";
import axios from 'axios'
import React, { useEffect,useState} from 'react'
import { Card ,ListTripContainer,Button} from "./styled";







function ListTripsPage (){

   const [trips , setTrips] = useState([]) 

    useEffect(()=>{
        getTripsReturn()
    },[])
    
    const history = useHistory()

    const goToApplicationForm =(id)=>{
        history.push(`/applyfortrip/${id}`)
    }

    const getTripsReturn=()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-mallta/trips")
        .then((response)=>{
            setTrips(response.data.trips)
            console.log(trips)
        })
        .catch((error)=>{
            console.log("erro",error)
        })
    }
    
    const backToHome = ()=>{
        history.push("/")
    }

   const list = trips.map((trip)=>{
        return(
            <div>

            
            <Card key={trip.id}>
                
                <h3>{trip.name}</h3>
                <p>Descrição:{trip.description}</p>
                <p>Planeta:{trip.planet}</p>
                <p>Duração da Viagem:{trip.durationDays}</p>
                <p>Data:{trip.date}</p>
                <button onClick={()=>goToApplicationForm(trip.id)}>Quero ir</button>
            </Card>
            
            
            </div>
        )
   })


    return(
        <ListTripContainer >
          
          {list} 
          <Button/>
          <button  onClick={backToHome}>volta</button>
        </ListTripContainer>
    )
}

export default ListTripsPage;