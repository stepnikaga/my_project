import React from 'react'
import CharacterCard from './CharacterCard'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    }
})

function CharacterList ({ postaci }) {
    return (
        <div>
        
            <div className='charContainer'>
            {
                postaci?.results
                .map(({ name, species, image, status, gender, id}) => <Link to={`/character/${id}`} species={species}><CharacterCard key={id}  name={name} species={species} image={image} status={status} gender={gender} id={id}/></Link>)
            }
            </div>
        </div>
    )
}
export default CharacterList