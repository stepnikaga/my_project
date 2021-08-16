import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function FotoContainer() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          
          <Typography component="div" style={{ backgroundColor: '#80ced6', height: '60vh' }} > 
            <h1> -: PageCreator :- </h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <input variant="outlined"></input> <button variant="contained">Szukaj</button> 

          </Typography>
          
        </Container>
      </React.Fragment>
      
    </div>  

  ) ;
}
export default FotoContainer