import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import axios from 'axios'

import aboutMe1 from '../Image/aboutMe1.jpg'

const Container = styled.div`
    background-image: url(${aboutMe1});
    background-repeat: no-repeat;
`

const FormContainer = styled.form`
    max-width: 40%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;  
`
const Input = styled.input`
    padding: 20px;
    margin: 10px 20px;
    font-size: 1rem;
`

function Registration () {
    const [users, setUsers] = useState(null)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/users').then(result => {
            console.log('result', result)
            setUsers(result.data)
        })
    }, [])
    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeLastName = (event) => setLastName(event.target.value)
    const handleChangeEmail = (event) => setEmail(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)

    console.log(name)
    const addUser = () => {
        const newUser = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": password,
        }
        axios.post('http://localhost:3000/users', newUser)
    }


    if (!users) {
        return (
           <div>Brak użytkownika</div>
        )
    }


    return (
        <div>
            <Container>
                <FormContainer>
                    <Input type='text' placeholder='Imię' onChange={handleChangeName}/>
                    <Input type='text' placeholder='Nazwisko' onChange={handleChangeLastName}/>
                    <Input type='text' placeholder='e-mail' onChange={handleChangeEmail}/>
                    <Input type='password' placeholder='hasło' onChange={handleChangePassword}/>
                    <Button onClick={addUser} variant={'contained'} color={'secondary'}>
                        Zarejestruj się 
                    </Button>
                </FormContainer>
            </Container>    
        </div>
    )
}

export default Registration

