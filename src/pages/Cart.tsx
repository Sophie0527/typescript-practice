import React, { useState } from 'react';
import styled from 'styled-components';

interface Istate {
  counter: number;
}

function Cart() {
  const [count, setCount] = useState<Istate>({
    counter: 0,
  });
  const onIncrement = () => {
    setCount({
      counter: count.counter + 1,
    });
  };
  const onDecrement = () => {
    setCount({
      counter: count.counter - 1,
    });
  };
  return (
    <Container>
      <h2>CART</h2>
      <CounterBox>
        <button onClick={onDecrement}>-</button>
        <span>{count.counter}</span>
        <button onClick={onIncrement}>+</button>
      </CounterBox>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  padding: 30px 10px;
  text-align: center;
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;
const CounterBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  button {
    width: 30px;
    height: 30px;
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
  }
  span {
    background-color: #e5eef3;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
