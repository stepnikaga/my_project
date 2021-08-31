import styled from 'styled-components'
import { Button } from '@material-ui/core'

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

const Login = () => {
    return (
        <div>
            <Container>
                <FormContainer>
                    <Input type='text' placeholder='e-mail'/>
                    <Input type='password' placeholder='hasło'/>
                    <Button variant={'contained'} color={'secondary'}>
                        Zaloguj się 
                    </Button>
                </FormContainer>
            </Container>    
        </div>
    )
}

export default Login

