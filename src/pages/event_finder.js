import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import EventSearch from "../components/search";
import EventList from "../components/event_list";
import {get_from_backend} from "../api/api";

function EventFinder() {
    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        get_from_backend("https://shine-backend.azurewebsites.net/v1/eventos/listar", setEventsList)
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