import * as React from 'react';
import { Card, CardActions, CardContent, Button, TextField, Box } from "@mui/material";

export default function SignUpForm({isLogin}) {
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
          {isLogin ? 
          <div>
            <TextField
              id="nome"
              label="Nome"
              defaultValue="Nome"
            />
            </div>
            :
            null
            }
          <div>
            <TextField
              id="email"
              label="email"
              defaultValue="E-mail"
            />
            </div>
            <div>
            <TextField
              id="senha"
              label="Senha"
              type="password"
            />
          </div>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="large">Gravar cadastro</Button>
      </CardActions>
    </Card>
  );
}