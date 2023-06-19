import "./App.css";

import {  useDispatch } from "react-redux";
import { action } from "./Reducer";
import Home from "./Home";

function App() {
 
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(action.increment());
  };
  const dec = () => {
    dispatch(action.decrement());
  };
  const incWithValue = () => {
    dispatch(action.incrementByAmount(20));
  };

  return (
    <div className="App">
     <Home/>
      <button onClick={inc}> Button</button>
      <button onClick={dec}>Dec Button</button>
      <button onClick={incWithValue}>IncWithValue</button>
    </div>
  );
}

export default App;
