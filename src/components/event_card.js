import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EventChips from './event_tags';

export default function EventCard({evento}) {
  return (
    <Card style={{ minWidth: "100%" }}>
      <CardContent>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {evento["event_name"]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Local: {evento["event_state"]} - {evento["event_city"]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Data: {evento["event_date"]}
        </Typography>
        <EventChips classificacoes={evento["event_tags"]}/>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
