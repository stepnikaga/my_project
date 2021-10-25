import React from 'react'
import styled from "styled-components";
import {useHistory} from 'react-router-dom'


const Card = styled.div`
    background-color: yellowgreen;
    display: flex;
    justify-content: center;
    border-radius: 0.9rem;
    box-shadow: 0 3px 6px 8px rgba(0,0,0,0.2);
    padding-top: 20px;
    margin: 20px 40px 20px 50px;
`;

const Wrapper = styled.div`
    padding-top: 8%;
    width: 11vw;
    cursor: pointer;
    margin: 40px;
    padding: 60px;
    height: 25vw;
    background-color: #ff6f69;
    border-radius: 0.9rem;
    box-shadow: 0 3px 6px 8px rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0 3px 6px 8px rgba(0,0,0,0.2);
        text-decoration: none;
        background-color: #87bdd8;
        color: #282C34;
        border-radius: 1px;
    }
`;
const Image = styled.img`
    max-width: 10vw;
    &:hover {
        transform: rotate(8deg);
    }
`;

const CardInfo = styled.div`
    margin-top: 20px;
    font-family: serif;
    height: 10px;
    align-items: center;
`
const Name = styled.h1`
    font-style: italic;
    color: yellow;
`

const CharacterCard = ({ name, species, image, status, gender, id}) => {
        const history = useHistory()
        console.log(name, species, status, id)

    return(
       <Card>
            <Wrapper onClick={() => history.push(`/${id}`)} data-name={name}>
                <Image alt={name} src={image}/>
                <CardInfo>
                    <Name>{name}</Name>
                    <h5>{species}</h5>
                    <h5>{status}</h5>
                    <h5>{gender}</h5>
                </CardInfo>
            </Wrapper>
        </Card> 
    )
}
export default CharacterCard





