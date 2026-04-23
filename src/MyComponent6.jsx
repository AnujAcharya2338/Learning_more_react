import React,{useRef, useState, useEffect} from "react";

function MyComponent6(){
const ref = useRef(0);
useEffect(() => {
    console.log("Component renders")
},[])

function HandleClick(){
ref.current++;
console.log(ref.current);
}
    return(
        <>
        <button onClick={HandleClick}>Click Me</button>
        </>
    )
}

export default MyComponent6