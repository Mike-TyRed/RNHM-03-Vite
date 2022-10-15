import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // Hook, declaracion de variable y funcion
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    console.log('render')
    //Actualiza el estado del componente
    setCounter(counter + 1);
    //setCounter((c)=>c+1);
  };
  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
