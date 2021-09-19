import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import Im from '../Image/Im.jpg'
import AboutMe from '../data/AboutMe'


const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: white;
  background-color: #b2b2b2;
`
const ImageContainer = styled.div`
  height: 75%;
  width: 55%;
  border-radius: 50%;
  background-size: 60%;
  background-image: url(${Im});
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 5%;
`

const TextContainer = styled.div`
  position: relative;
  max-width: 40%;
  height: 60%;
  padding: 30px;
  color: black;
  margin-top: 10%;
`


function About  ({person = AboutMe}) {
  
  return (
    <MainContainer>
      <TextContainer>
        <Typography variant='h2'>{person.name}</Typography> 
        <Typography variant='h2'>{person.secondName}</Typography>
        <Typography>{person.description}</Typography>  
      </TextContainer> 
      <ImageContainer />
    </MainContainer>
  );
}
export default About
