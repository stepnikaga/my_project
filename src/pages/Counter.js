import React from "react"
import { Button } from "@material-ui/core"
import { useState } from "react"
import styled from "styled-components"


const MainCounter = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: #b2b2b2;
    margin: 70px 100px 0px 0px; 
`
const Result = styled.h5`
    color: ${({ count }) => (count % 5 === 0 && count !== 0 ? "green" : "red")};

`

function Counter() {
    const [count, setCount] = useState(0)
    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)
    const reset = () => setCount(0)

    return (
        <div className='counter'>
            <MainCounter>        
                <Button onClick={decrement} variant={"contained"} color={'secondary'}>-</Button>
                <Result count={count}>{count}</Result>                
                <Button onClick={increment} plus variant={"contained"} color={'secondary'}>+</Button>
                <br></br>
                <br></br>
                <Button onClick={reset} variant={"contained"} color={'secondary'}>RESETUJ</Button>
            </MainCounter>
        </div>
    )
}
export default Counter
