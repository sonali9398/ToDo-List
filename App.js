import React, { useState } from "react";
import "./App.css";
import TodoList from "./ToDoList";

const App = () =>{
  const [inp, setInp] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInp(e.target.value);
  };

  const clickItem = () =>{
    setItems((oldItems) => {
      return[...oldItems, inp]
    });
    setInp("");
  }

  const deleteItem = (id) =>{
    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) => {
        return index != id;
      })
    })
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <div className="space_div">
              <input
                type="text"
                placeholder="Add items"
                onChange={itemEvent}
                value={inp}
              />
              <button onClick={clickItem}>+</button>
              <ol>
                {/* <li>{setInp}</li> */}
                {items.map((itemNum, index) =>{
                  return <TodoList
                    key = {index}
                    id = {index}
                    text = {itemNum}
                    onSelect = {deleteItem}
                  />
                })}
              </ol>
          </div>
          
        </div>

      </div>
    </>
  )
};

export default App;
