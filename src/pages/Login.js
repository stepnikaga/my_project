import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import login from '../Image/login.jpg'


const Container = styled.div`
    background-image: url(${login});
`

const FormContainer = styled.form`
    max-width: 40%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    border: none;
`
const Input = styled.input`
    padding: 20px;
    margin: 10px 20px;
    font-size: 1rem;
`

function Login () {
    const [users, setUsers] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successFullLogin, setSuccessFullLogin] = useState(false)
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3000/users').then(result => {
            console.log('result', result)
            setUsers(result.data)
        })
    }, [])

    const handleChangeEmail = (event) => setEmail(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)

    const user = () => {

        const passwordOk = {
            "email": email,
            "password": password,
        }
        console.log('test')
        let login = false

        users.map(user => user.email === passwordOk.email && user.password === passwordOk.password ? login = true : login = false)
        console.log('login', login)
        if (login) {
            history.push('/LoginS')
            
        }
    }
    

    if (!users) {
        return (
           <div>Brak użytkownika w bazie</div>
        )
    }  


    return (
        <div>
            <Container>
                <FormContainer>
                    <Input type='text' placeholder='e-mail' onChange={handleChangeEmail}/>
                    <Input type='password' placeholder='hasło' onChange={handleChangePassword}/>
                    <Button onClick={user} variant={'contained'} color={'secondary'}>
                        Zaloguj się 
                    </Button>
                </FormContainer>
            </Container>    
        </div>
    )
}

export default Login

