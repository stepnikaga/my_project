import React from "react";
import styled from "styled-components";
import { Button, FormControl, OutlinedInput,Typography } from "@material-ui/core";

import login from '../Image/login.jpg'


const HeaderContainer = styled.div`
  background-image: url(${login});
  height: 120vh;
  background-position: center;
  background-size: cover;
`
const FormContainer = styled.div`
  & {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Home = () => {
  return (
    <HeaderContainer>
      <FormContainer>
        <FormControl>
          <Box>
            <Typography variant={'h3'} color={'textPrimary'} style={{ color: 'white', marginBottom: '1rem'}}>
              PageCreator
            </Typography>
            <div>
              <OutlinedInput placeholder={'Wpisz czego szukasz'} color={'primary'} 
                style={{ color: 'white', width: '70%', height: '3rem', margin: '1rem'}}>
              </OutlinedInput>
              <Button variant={'outlined'} color={'primary'} >Szukaj</Button>
            </div>
          </Box>
        </FormControl>
      </FormContainer>
    </HeaderContainer>
  )
}
export default Home

