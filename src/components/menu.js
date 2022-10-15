import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
    NavLink
} from 'react-router-dom'


export default function SideMenu({ state, setState }) {
    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState();
    };
    
    const paths =["/criar-evento","/buscar-evento"]
    const list = () => (
        <>
            <List>
                {['Criar Evento', 'Buscar Evento'].map((text, index) => (
                    <NavLink to={paths[index]}>
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <Drawer
                    anchor={'left'}
                    open={state}
                    onClose={toggleDrawer()}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
