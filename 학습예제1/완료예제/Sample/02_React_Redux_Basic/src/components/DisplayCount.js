const DisplayCount = ({count})=>{
  return(
    <div>
      <h2>Display Counter</h2>  
      <input type="text" value={count} readOnly></input>
    </div>
  ) 
}
export default DisplayCount;

