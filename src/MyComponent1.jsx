import React, { StrictMode, useState } from "react";

function MyComponent1() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function HandleYearChange(event){
    setCar(c => ({...c, year:event.target.value}));
  }
  function HandleMakeChange(event){
    setCar(c => ({...c, make:event.target.value}))
  }

  function HandleModelChange(event){
    setCar(c => ({...c, model:event.target.value}))
    
  }


  return <>
  <div>
   <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={HandleYearChange} /><br />
    <input type="text" value={car.make} onChange={HandleMakeChange} /><br />
    <input type="text" value={car.model} onChange={HandleModelChange}/><br />

  </div>
  </>;
}

export default MyComponent1;
