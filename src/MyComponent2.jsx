import React,{useState} from "react";

function MyComponent2(){

    const [foods,setFoods] = useState(['Apple','Orange','Banana']);

    function HandleAddFruit(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);
        
    }
    function HandleRemoveFruit(index){

        setFoods(foods.filter((_,i) => i !=index));

        
    }



return(
    <>
    <div>
        <h2>
            List of foods:
        </h2>
        <ul>
            {foods.map((food, index) => 
            <li key = {index} onClick={() => HandleRemoveFruit(index)}>
                {food}
                </li>)}
        </ul>
        <input type="text" placeholder="Enter food name" id="foodInput"/>
        <br />
        <button onClick={HandleAddFruit}>Add Fruit</button>
    </div>
    </>
)

}

export default MyComponent2