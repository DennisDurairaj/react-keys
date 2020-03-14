import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const itemList = [
    { id: 1, value: "London" },
    { id: 2, value: "Paris" },
    { id: 3, value: "Tokyo" },
    { id: 4, value: "Berlin" }
  ];

  const addItem = () => {
    const itemToAdd = itemList.find(item => {
      const checkExists = items.filter(stateItem => {
        return stateItem.id === item.id;
      });
      if (checkExists.length === 0) {
        return item;
      }
    });
    setItems([...items, itemToAdd]);
  };
  return (
    <div className="App">
      <button disabled={items.length === itemList.length} onClick={addItem}>
        Add item
      </button>
      {items.length > 0 &&
        items.map(item => <div key={item.id}>{item.value}</div>)}
    </div>
  );
}

export default App;
