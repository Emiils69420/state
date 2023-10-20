import {useState} from "react";
function Hello(props){
    const [name, setName] = useState(props.defaultName);
    function handleChange(text){
        setName(text.target.value);
    }
return(
   <>
   <input value={name} onChange={handleChange}></input>
   <p>Hello, {name}</p>
   </>
)
}
export default Hello;