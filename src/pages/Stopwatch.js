import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const Time = styled.div`
  color: darkgray;
  font-size: 50px;
`;

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let id;
    if (start) {
      id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => clearInterval(id);
  });

  return (
    <div>
      <Container>
        
        <button onClick={() => setStart(true)}>Start</button>
        {count} <Time> sek</Time>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setCount(0)}>Reset</button>
        
      </Container>
    </div>
  );
};

export default Stopwatch;
