
import React,{ useState, useEffect } from "react";
function useStates()
{
    const[name, setName] = useState('kathford');
    const[count, setCount] = useState(8); // const[var, function(setvar)] 
    const clickCount = () => {
        console.log("Click count ...");
        setName('Ritika');
        setCount(count+1);
    }
    const DecCount = () => {
        setCount(count-1);
    }
    useEffect(() => {
        console.log("Use effect for specific call");

    },[count]);
    return(
        <React.Fragment>
            <h3>Implementing use states:: </h3>
            <i>Count is {count}</i>
            <i>Name is {name}</i>
            <button onClick={DecCount}>Decrease count</button>
            <button onClick={clickCount}>Click count</button>
        </React.Fragment>
    )
}
export default useStates;