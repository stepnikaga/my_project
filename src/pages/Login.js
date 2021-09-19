import styled from 'styled-components'
import { Button } from '@material-ui/core'
import axios from 'axios'

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
    // const [users, setUsers] = useState(null)

    // useEffect(() => {
    //     axios.get('http://localhost:3000/users').then(result => {
    //         console.log('result', result)
    //         setUsers(result.data)
    //     })
    // }, [])


    // if () {
    //     return (
    //        <div>Brak danych</div>
    //     )
    // }


    return (
        <div>
            <Container>
                <FormContainer>
                    <Input type='text' placeholder='e-mail'/>
                    <Input type='password' placeholder='hasło'/>
                    <Button onClick variant={'contained'} color={'secondary'}>
                        Zaloguj się 
                    </Button>
                </FormContainer>
            </Container>    
        </div>
    )
}

export default Login

