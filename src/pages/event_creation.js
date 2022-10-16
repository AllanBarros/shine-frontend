import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import EventForm from "../components/event_form";
import {get_from_backend , post_to_backend}  from "../api/api";

function EventCreation() {
    const emptyEventForm = {
        event_name:"",
        event_date:"",
        event_country:"",
        event_state:"",
        event_city:"",
        event_postal_code:"",
        event_address:"",
        event_complement:"",
        event_description:"",
        event_details:""
      }
      
    const [optionList, setOptionsList] = useState([])
    const [eventForm, setEventForm] = useState(emptyEventForm)
    const [tags, setTags] = useState([]);
    const [dateValue, setDateValue] = useState(null);

    const handleSaveEvent = () => {
        let new_event = eventForm
        new_event["event_tags"] = tags
        post_to_backend("https://shine-backend.azurewebsites.net/v1/eventos/criar", new_event, handleClear)

    }

    const handleClear =() =>{
        setTags([])
        setEventForm(emptyEventForm)
        setDateValue(null)
    }
    
    const format_options_list = (data) => {
        let formatted_options_list = data.map((values) => {
            return values["classification_name"]
        })
        return setOptionsList(formatted_options_list);
    }

    useEffect(() => {
       const get_tags = () => {
            get_from_backend("http://localhost:8000/v1/tags/listar", format_options_list)
        }
        get_tags();
      },[]);

    return (

        <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
                {optionList ?
                <EventForm options={optionList} eventForm={eventForm} setEventForm={setEventForm} 
                tags={tags} setTags={setTags} handleSaveEvent={handleSaveEvent} handleClear={handleClear} setDateValue={setDateValue} dateValue={dateValue}/>
                :
                null
            }
            </Grid>
        </Grid>
    )
}

export default EventCreation;