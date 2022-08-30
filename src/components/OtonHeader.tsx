// import { useContext } from 'react';
// import {ThemeContext} from '../App';
import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const staticCdn = 'https://cdn.jsdelivr.net/gh/ArtemZubarev/oton-core-assets@main/images';

export default function OtonHeader() {
  const logo = `${staticCdn}/simple-oton-logo.svg`;

  return (
    <header>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      {/* <Container maxWidth="md">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Stack spacing={2} direction="row">
          <Button variant="contained">Log in</Button>
          <Button variant="outlined">Register</Button>
        </Stack>
      </Container> */}
    </header>
  );
}
