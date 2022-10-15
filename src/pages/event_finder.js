import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import EventSearch from "../components/search";
import EventList from "../components/event_list";
import {get_from_backend} from "../api/api";

function EventFinder() {
    const [eventsList, setEventsList] = useState([])
    // const event_list = 
    // [
    // {
    //     "nome":"Iron Maiden",
    //     "data":"12/12/22",
    //     "estado":"Rio de Janeiro",
    //     "cidade":"Rio de Janeiro",
    //     "classificacoes":["Rock", "Música", "Show"]
    // },    
    // {
    //     "nome":"Feira de Adoção",
    //     "data":"02/01/23",
    //     "estado":"Paraná",
    //     "cidade":"Curitiba",
    //     "classificacoes":["Animas", "Feira"]
    // },
    // {
    //     "nome":"Exposição Leonardo Da Vinci",
    //     "data":"22/04/23",
    //     "estado":"São Paulo",
    //     "cidade":"São Paulo",
    //     "classificacoes":["Artes", "Exposição"]
    // }
    // ]

    useEffect(() => {
        get_from_backend("http://localhost:8000/v1/eventos/listar", setEventsList)
      },[]);

    return (
        <Grid container spacing={4}>
            {eventsList ?
            <>
            <Grid item xs={12} md={12}>
                <EventSearch event_list={eventsList}/>

            </Grid>
            <Grid item xs={12} md={12}>
                <EventList list={eventsList} />
            </Grid>
            </>
            :
            null
            }
        </Grid>
    )
}

export default EventFinder;