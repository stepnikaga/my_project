import React from 'react'
import styled from "styled-components";
import {useHistory} from 'react-router-dom'

const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  
`;

const CharacterCard = ({ name, species, image, status, gender, id}) => {
        const history = useHistory()
        console.log(name, species, status, id)
    return(
        
        <Wrapper className='card' data-name={name}>
            <img className='characterImage' alt={name} src={image}/>
            <div onClick={() => history.push(`/${id}`)} className='cardInfo'>
                <h1>{name}</h1>
                <h5>{species}</h5>
                <h5>{status}</h5>
                <h5>{gender}</h5>
            </div>
        </Wrapper>
    )
}
export default CharacterCard





