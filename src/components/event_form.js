import * as React from 'react';
import { Card, CardActions, CardContent, Button, TextField, Box } from "@mui/material";
import MultipleSelect from './multiple_select';
import BasicDatePicker from './date_picker';


export default function EventForm({ options, eventForm, setEventForm, 
  tags, setTags, handleSaveEvent, handleClear, setDateValue, dateValue }) {

  const handleChange = (e, atribute) => {
    setEventForm({...eventForm, [atribute]:e.target.value})
  }

  return (
    <Card sx={{ maxWidth: '100%' }} style={{marginTop:"2%"}}>
      <CardContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="evento"
              label="Nome do evento"
              value={eventForm.event_name}
              onChange={(e) => {handleChange(e, "event_name")}}
            />
            <BasicDatePicker setValue={setDateValue} value={dateValue}/>
          </div>
          <div>
            <TextField
              id="pais"
              label="Pais"
              value={eventForm.event_country}
              onChange={(e) => {handleChange(e, "event_country")}}
            />
            <TextField
              id="estado"
              label="Estado"
              value={eventForm.event_state}
              onChange={(e) => {handleChange(e, "event_state")}}
            />
          </div>
          <div>
            <TextField
              id="cidade"
              label="Cidade"
              value={eventForm.event_city}
              onChange={(e) => {handleChange(e, "event_city")}}
            />
            <TextField
              id="cep"
              label="CEP"
              value={eventForm.event_postal_code}
              onChange={(e) => {handleChange(e, "event_postal_code")}}
            />
          </div>
          <div>
            <TextField
              id="endereco"
              label="Endereço"
              value={eventForm.event_address}
              onChange={(e) => {handleChange(e, "event_address")}}
            />
            <TextField
              id="numero"
              label="complemento"
              value={eventForm.event_complement}
              onChange={(e) => {handleChange(e, "event_complement")}}
            />
          </div>
          <div>
            <TextField
              id="descricao"
              label="Descrição"
              value={eventForm.event_description}
              onChange={(e) => {handleChange(e, "event_description")}}
            />
            <TextField
              id="detalhes"
              label="Detalhes"
              value={eventForm.event_details}
              onChange={(e) => {handleChange(e, "event_details")}}
            />
          </div>
          <MultipleSelect
            label="Classificações"
            options={options}
            value={tags}
            setState={setTags}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSaveEvent}>Gravar evento</Button>
        <Button size="small" onClick={handleClear}>Novo Evento</Button>
      </CardActions>
    </Card>
  );
}