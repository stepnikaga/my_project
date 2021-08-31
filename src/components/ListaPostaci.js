import React from 'react'
import CharacterCard from './CharacterCard'

function ListaPostaci ({ postaci }) {
    return (
        <div>
            <div className='charContainer'>
            {
                postaci?.results
                .map(({ name, species, image, status, gender, id}) => <CharacterCard key={id}  name={name} species={species} image={image} status={status} gender={gender} />)
            }
            </div>
        </div>
    )
}
export default ListaPostaci