import List from "../../completed/List";
import React from "react";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Oranges", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 39 },
  ]

  const vegetables = [
    { id: 6, name: "Potato", calories: 110 },
    { id: 7, name: "Celery", calories: 34 },
    { id: 8, name: "Carrots", calories: 87 },
    { id: 9, name: "Corn", calories: 95 },
    { id: 10, name: "Broccoli ", calories: 122 },
  ]

  return(<> {fruits.length > 0  ? <List items={fruits} category="Fruits"></List>:null }
  {vegetables.length > 0  ? <List items={vegetables} category="Vegetables"></List>:null}
  </>);
}
export default App;
