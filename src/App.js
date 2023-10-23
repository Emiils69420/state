import Counter from "./Counter"
import Hello from "./Hello"
function App() {
    const allNames=["Emils","Janis","Kristaps"]

const HelloJSX = allNames.map((name,index) =>{
return <Hello key={index} defaultName ={name} />
  });

  return (
  <>
  <Counter/>
  {HelloJSX}
  </>
  );
}

export default App;
