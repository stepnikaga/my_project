import React from "react"
import { Button } from "@material-ui/core"
import { useState } from "react"
import styled from "styled-components"


const MainCounter = styled.div`
  /* position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: white; */
  background-color: #b2b2b2;
`

const Result = styled.h5`
    color: green;

`

function Counter() {

    const [count, setCount] = useState(0)
    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)
    const reset = () => setCount(0)

     
    return (
        <div className='counter'>
            <MainCounter>
        
                {count % 5 === 0 && count !== 0 ? <Result><h5>{count}</h5></Result> : <Result>{count}</Result>}

                <Button onClick={decrement} variant={"contained"} color={'secondary'}>-</Button>

                <Button>{count}</Button>
            
                <Button onClick={increment} plus variant={"contained"} color={'secondary'}>+</Button>
                <br></br>
                <br></br>
                <Button onClick={reset} variant={"contained"} color={'secondary'}>RESETUJ</Button>
            </MainCounter>
        </div>
        
    )
}
export default Counter
