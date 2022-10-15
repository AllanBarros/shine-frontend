import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function EventChips({ classificacoes }) {
    return (
        <Stack direction="row" spacing={1}>
            {classificacoes.map((tag_label) => {
                return (
                    <Chip label={tag_label} />
                )
            })
            }
        </Stack>
    );
}
