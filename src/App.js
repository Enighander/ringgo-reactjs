import { useState } from "react";
import Show from "./components/Show";

//Functional components 
function App() {
  const [name, setName] = useState ("Ringgo");
  const [age, setAge] = useState (25);
  const [isMale, setIsMale] = useState (true);
  
  return (
    <div>
      <h1>this using Functional components</h1>
      <h2>Hello my name is {name} i am {age} years old {isMale? "male" : "female"}</h2>
      <Show name={name} age={age} isMale={isMale} />
    </div>
  );
}

export default App;
