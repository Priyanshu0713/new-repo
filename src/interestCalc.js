import React, { useState, useEffect } from 'react'
import { ReactDOM } from 'react';
function InterestCalc()
{

    const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const[num3,setNum3]=useState(0);
    const[Add,setAdd]=useState("");
    
console.log('aaa', num1)
console.log('aaa', num2)
console.log('aaa', num3)
   
useEffect(()=>{
        setAdd((num1*num2*num3)/100)
    },   )

     
    return(
     <div className="whole-page">   
     <div className="page">
        <div className='int-back'>
        <div className="interest">
         <label>${Add} </label>
           <h5>Simple Interest</h5>
        </div>
     </div><form >
         <div className="AYR"><br/>
             <label>Principal Amount</label>
             <input type="number" value={num1 || ""} onChange={(e)=>setNum1(e.target.value)} placeholder="$0" 
             className="Principal-Amount"/><br/>
              <label>Year</label>
                   <input type="number" value={num2 || ""} placeholder="0" onChange={(e)=>setNum2(e.target.value)}
                      className="Year"></input><br/>
              <label>Rate</label>
                  <input type="number" value={num3 || ""} placeholder="0" onChange={(e)=>setNum3(e.target.value)}
                    className="Rate"></input><br/>
            
     </div>
     </form>
     </div>
     </div>
     )
    }
export default InterestCalc;