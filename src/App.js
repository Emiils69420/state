import {useState} from "react"

function App() {
const [result, setResult] = useState(0);

function addRatio(){
setResult(result + 1);
console.log("funkcija ir izsaukta");
console.log("result ir " + result);
  }
  function minus(){
    setResult(result - 1);
  }
  return (
    <div className="App">
      <input type="number" name="result"></input>
    
      <button onClick={addRatio}>Gang +1 ratio</button>
      <button onClick={minus}>Gang -1 ratio</button>
<h1>{result}</h1>
    </div>
  );
}

export default App;
