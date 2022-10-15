import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EventCard from './event_card';

export default function EventList({ list }) {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {list.map((evento, index) => {
                return (

                    <ListItem key={index} alignItems="flex-start">
                        <EventCard evento={evento} />
                    </ListItem>
                )
            })
            }
        </List>

    );
}
