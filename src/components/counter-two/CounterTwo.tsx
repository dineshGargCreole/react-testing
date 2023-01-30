import React from "react";

interface CounterProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

function CounterTwo(props: CounterProps) {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
}

export default CounterTwo;
