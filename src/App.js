import { useState } from "react";
import "./App.css";
import Show from "./components/Show";

function App() {
  let handleChange = (e)=>{
    setProduct(e.target.value);
  }
  let [data,setProduct] = useState("");
  return (
    <div className="App">
        <p>Hello World</p>
        <input type="text" placeholder="Masukan Kata" onChange={handleChange}/>
        <br/>
        <Show product={data}></Show>
    </div>
  );
}

export default App;
