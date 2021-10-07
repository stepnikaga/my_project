import React from 'react'
import CharacterCard from './CharacterCard'
// import { makeStyles } from '@material-ui/core'
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 30%;
  display: flex;
  
`;


// const useStyles = makeStyles({
//     link: {
//         textDecoration: 'none',
//     }
// })

function CharacterList ({ postaci }) {

    return (
        <div>
        
            <MainWrapper className='charContainer'>
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
            
        </div>
    )
}
export default CharacterList

