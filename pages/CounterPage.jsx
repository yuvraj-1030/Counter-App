import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = ()=>{
    console.log('Counter Fn Call');
    // Hook (State)
    const [count, setCount] =  useState(0);
    
    //let count = 0;
    const updateCount = (val)=>{
        if(val === '+'){
           //count++;
           //console.log('Count is ', count);
            setCount(count + 1); // State Change
        }
        else{
           // count--;
           // console.log('Count is ', count);
           setCount(count-1) ; // State Change
        }
       
        console.log('Count is ', count);
    }
    const myStyle = {
        
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "30%",
        left: "45%",
        margin: "1px"
    };
    const myStyle2 = {
        
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "30%",
        left: "50%",
        margin: "1px"
    };
    return (<div className='container'>
        <Message className='alert alert-danger text-center' msg="Counter App"/>
        <Message value={count} className='alert alert-success text-center' msg="Counter Value is "/>
         <Button fn = {updateCount} val  ="+" className = "btn btn-success me-2" style = {myStyle}/> 
         <Button fn = {updateCount} val="-" className = "btn btn-danger me-2" style = {myStyle2}/>   
    </div>);
}