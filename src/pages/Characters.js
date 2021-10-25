import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';

import CharacterList from '../components/CharacterList';
import arickmorty from '../Image/arickmorty.jpg';
import FilterSwitch from '../components/FilterSwitch'


const PageButton = styled.button `
    margin: 100px 100px 20px 80px; 
    display: inline-block;
    height: 60px;
    width: 150px;
    border: none;
    background-color: #282C34;
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    padding: 0;
    color: whitesmoke;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
        box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
        text-decoration: none;
        background-color: whitesmoke;
        color: #282C34;
        border-radius: 1px;
    }
`
const Input = styled.input`
    padding-left: 20px;
    width: 14%;
    margin-left: 5%;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-image: url(${arickmorty});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 5px;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100vw;
    height: 100vw;
    flex-wrap: wrap;
    cursor: pointer;
    &:hover {
        box-shadow: 0 3px 6px 8px rgba(0,0,0,0.2);
    }
`

const NEXT = 'NASTĘPNA'
const PREV = 'POPRZEDNIA'
const TITLE = 'RICK AND MORTY'

function Characters({ setChars }) {
    const [page, setCurrentPage] = useState(1)
    const [postaci, setPostaci] = useState(null)
      
    const next = () => {
       if(page === 34) {
           setCurrentPage(page)
        }
        setCurrentPage(page +1)
    }
    const previous = () => {
       if(page === 1) {
           setCurrentPage(page)
        }
        setCurrentPage(page -1)
    }
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => {
                setPostaci(response.data);
                setChars(response.data.results);
                console.log('response', response.data)
            })

    }, [page])
    if(!postaci) {
        <h1>Loading...</h1>
    }

    
    return(
        <MainContainer>
            <h3>
                <PageButton onClick={previous}>{PREV}</PageButton>
                Strona {page} z {postaci?.info.count}
                <PageButton onClick={next}>{NEXT}</PageButton>
            </h3>
            <h2>{TITLE}</h2>
                <Input type='text' placeholder='Szukaj...'></Input>
                <FilterSwitch />
            <CardContainer>
                <CharacterList postaci={postaci} />
            </CardContainer>
        </MainContainer>
    )
}
export default Characters

