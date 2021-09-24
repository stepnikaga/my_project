import React, { useState, useEffect, axios } from 'react'
import { makeStyles } from '@material-ui/core'


const CharacterCard = ({ name, species, image, status, gender, id}) => {
    // const classes = useStyles()
    console.log(name, species, status)
    // const [character, setCharacter] = useState()

    // useEffect(() => {
    //     axios.get(`https://rickandmortyapi.com/api/character/?id=${id}`).then(response => {
    //         setCharacter(response.data)
    //     })

    // }, [character])
    return(
        
        <div className='card' data-name={name}>
            <img className='characterImage' alt={name} src={image}/>
                <div className='cardInfo'>
                    <h1>{name}</h1>
                    <h5>{species}</h5>
                    <h5>{status}</h5>
                    <h5>{gender}</h5>
                </div>
        </div>
    )
}
export default CharacterCard





