import { Container, Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import sixCardsInfo from "../data/SixCardsInfo";

// const Container = styled.div`
//     background-color: red;
// `
const useStyles = makeStyles({
    gridItem:{
        backgroundColor: 'red',
        width: '500%',
        height: '400px',

    },
    mainContainer: {
        width: '100%',
        padding: '90px',
        height: '100%',
        marginTop: '0px',        
    },
    title: {
        padding: '50px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    description: {
        marginBottom: '8rem',
    },
    link: {
        textDecoration: 'none',
    },
    paper: {
        backgroundColor: '#87bdd8',
        height: '80%',
        margin: '40px',
        textAlign: 'center',
        boxShadow: 'rgba(0,0,0,0.4) 0px 2px 4px',
        '&:hover': {
            boxShadow: 'rgba(0,0,0,0.9) 8px 8px 10px',
            transition: '0,6s',
        }, 

    },
})

const SixCards = () => {
    const classes = useStyles()

    const titles = sixCardsInfo.map (({ id, title, description, path}) => (
        <Grid className={classes.gridItem} item key={id} xs={12} sm={6} md={4} lg={4} xl={4}>
            <NavLink className={classes.paper} to={path}>
                <Paper className={classes.paper}>
                    {/* <Icons>{icon}</Icons> */}
                    <Typography className={classes.title} color={'secondary'}>{title}</Typography>
                    <Typography className={classes.description}>{description}</Typography>
                </Paper>
            </NavLink>
        </Grid>
    ))

    return (
        <Container>
            <Grid container className={classes.mainContainer}>{titles}</Grid>
        </Container>
    )
}
export default SixCards

