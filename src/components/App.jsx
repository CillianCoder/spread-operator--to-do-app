import React, { useState } from "react";
import ToDoItem from "./ToDoList";
import InputArea from "./InputArea";


function App() {

  const [doList, setDoList] = useState([]);


  const addItem = (currentList) => {
    setDoList(prevent => {
      return ([...prevent, currentList]);
    });
  };

  const deleteItem = (id) => {
    setDoList(preValue => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  };


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea add={addItem}/>
      <div>
        <ul>
          {doList.map((list, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={list}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
