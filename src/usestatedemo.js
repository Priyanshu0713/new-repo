import React ,{useState}from 'react';

function Usestatedemo() {
  
const[name, setName]=useState("?")
const[age, setAge]=useState("?")

  return (
    <div className="App">
     {
       <h1> Hey "{name}" your age is "{age}"</h1>
       
      
     }
    <input type="text" onChange={(e)=>setName(e.target.value)} />
    <input type="number" onChange={(e)=>setAge(e.target.value)} />
    
    </div>
  );
}

export default Usestatedemo;