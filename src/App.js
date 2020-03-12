import React from "react";
import "./App.css";

function App() {
  const items = [
    { id: 1, value: "London" },
    { id: 2, value: "Paris" },
    { id: 3, value: "Tokyo" },
    { id: 4, value: "Berlin" }
  ];
  return (
    <div className="App">
      {items.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
}

export default App;
