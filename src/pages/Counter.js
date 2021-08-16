import styled from 'styled-components'
import React, { useState, useEffect } from 'react'




function Counter({ defaultValue = 0, step = 1 }) {
    const [value, setValeu] = useState(defaultValue)

    useEffect(() =>{
        const minusBtn = document.getElementById('minus')
        const onClick = function () {
            console.log('clik from useEffect')
        }
        minusBtn.addEventListener('click', onClick)

        return () => {
            minusBtn.removeEventListener('click', onClick)
        }
    })
   
    const onMinus = () => {
        setValeu(value - step)
    }

    const onAdd = () => {
        setValeu(value + step)
    }

    return(
        
        <div>
            <h1>Counter</h1>
            <button onClick={onMinus} id="minus"> - </button>
            {value}

            <button onClick={onAdd} id="add"> + </button>
        </div>
    )
}

export default Counter