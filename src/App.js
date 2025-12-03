
import React from "react";
import "./App.css";

function FruitsList() {
  const fruits = ["Mango", "Banana", "Apple", "Orange", "Grapes"];

  return (
    <div className="fruit-container">
      <h2 className="fruit-title">Fruit List</h2>

      <ul className="fruit-list">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsList;



