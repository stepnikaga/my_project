import React from 'react'
import CharacterCard from './CharacterCard'
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;

`
const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc5c;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
    &:hover {
            box-shadow: 0 3px 6px 8px rgba(0,0,0,0.2);
            text-decoration: none;
            /* background-color: #87bdd8; */
            /* color: #282C34; */
            border-radius: 1px;
        }
`;



function CharacterList ({ postaci }) {
    return (
        <Card>
            <MainWrapper>
                {postaci?.results.map(
                    ({ name, species, image, status, gender, id}) => (
                        <CharacterCard 
                            key={id}  
                            name={name} 
                            species={species} 
                            image={image} 
                            status={status} 
                            gender={gender} 
                            id={id}
                        />
                    )
                )}
            </MainWrapper>
        </Card>
    )
}
export default CharacterList

