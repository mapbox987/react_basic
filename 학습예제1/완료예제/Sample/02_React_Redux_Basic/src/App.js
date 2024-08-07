
import { useState } from 'react';
import './App.css';
import CounterRoot from './components/CounterRoot';
import DisplayCountRoot from './components/DisplayCountRoot';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Root</h1>
      <CounterRoot changeCount={(count)=>{
        console.log(count);
        setCount(count);
      }}></CounterRoot>
      <DisplayCountRoot count={count}></DisplayCountRoot>
    </div>
  );
}

export default App;
