import Counter from "./Counter"
import Hello from "./Hello"
function App() {
  const vardi=["Emils","Janis","Kristaps"]
  const vardiJSX = vardi.map((theName,index)=>{
return <Hello defaultName={theName} key={index}/>
  });

  return (
  <>
  <Counter/>
  {vardiJSX}
  </>
  );
}

export default App;
