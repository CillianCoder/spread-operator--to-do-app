import React, { useState } from "react";

function App() {

  const [currentList, setCurrentList] = useState("");
  const [doList, setDoList] = useState([]);

  const detect = event => setCurrentList([event.target.value]);

  const addItem = () => {
    const newItem = {
      id: doList.length + 1,
      do: currentList
    }

    setDoList([...doList, newItem]);
    setCurrentList("");

  };


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={currentList}
          onChange={detect}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {doList.map(list => (
            <li key={list.id}>{list.do}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
