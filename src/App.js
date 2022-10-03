
import './App.css'
import React, { useContext } from "react";
import { CounterProvider, CounterContext } from "./Context";



function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h5>Count: {state.count}</h5>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App