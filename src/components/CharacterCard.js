import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    }
})


const CharacterCard = ({ name, species, image, status, gender, id}) => {
    const classes = useStyles()
    return(
        <Link classesName={classes.link} to={`/character-list/${name}/${id}`} species={species}>
            <div className='card' data-name={name}>
                <img className='characterImage' alt={name} src={image}></img>
                <div className='cardInfo'>
                    <h1>{name}</h1>
                    <h5>{species}</h5>
                    <h5>{status}</h5>
                    <h5>{gender}</h5>
                </div>
            </div>
        </Link>
    )
}
export default CharacterCard