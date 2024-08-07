import { useState } from "react";

const Counter = ({changeCount})=>{
  const [number, setNumber] = useState(0);
  changeCount(number);
  return(
    <div>
      <h2>Counter</h2>    
      <button type="button" onClick={()=>{
          let num = number;
          setNumber(--num);
        }        
      }>-</button>
      <input type="text" readOnly value={number} ></input>
      <button type="button" onClick={()=>{
          let num = number;
          setNumber(++num);
        }        
      }>+</button>
    </div>
  )
}
export default Counter;