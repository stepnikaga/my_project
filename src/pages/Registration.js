import styled from 'styled-components'
import { Button } from '@material-ui/core'

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

const Registration = () => {
    return (
        <div>
            <Container>
                <FormContainer>
                    <Input type='text' placeholder='Imię'/>
                    <Input type='text' placeholder='Nazwisko'/>
                    <Input type='text' placeholder='e-mail'/>
                    <Input type='password' placeholder='hasło'/>
                    <Button variant={'contained'} color={'secondary'}>
                        Zarejestruj się 
                    </Button>
                </FormContainer>
            </Container>    
        </div>
    )
}

export default Registration

