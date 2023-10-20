import {useState} from "react"

function Counter() {
const [result, setResult] = useState(0);
const [ratioChange, setRatioChange] = useState(1);

function addRatio(){
setResult(result+parseInt(ratioChange));
console.log("funkcija ir izsaukta");
console.log("result ir " + result);
  }
  function minus(){
    setResult(result - ratioChange);
  }
  function handleRatioChange(kakens){
    setRatioChange(kakens.target.value);
  }
  return (
    <div className="App">
      <input type="number" value={ratioChange} onChange={handleRatioChange} ></input>
    
      <button onClick={addRatio}>Gang +1 ratio</button>
      <button onClick={minus}>Gang -1 ratio</button>
<h1>{result}</h1>
    </div>
  );
}

export default Counter;