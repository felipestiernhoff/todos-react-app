import React, { useState } from "react";
export const InputForm = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: newTodo, completed: false, priority: Number(priority) };
    addTodo(newTask)
    setNewTodo("");
    setPriority("");
    console.log(newTask)
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  const handleTextChange = (e) => {
    setNewTodo(e.target.value)
  }

  function renderPriorityOptions() {
    const options = [<option key="" value="">Priority</option>];
    [...Array(10)].forEach((_, i) => {
      options.push(
        <option key={i + 1} value={i + 1}>{i + 1}</option>
      );
    });
    return options;
  }
  return (
    <form className="appForm" onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Add new todo:</label>
      <input
        type="text"
        id="new-todo"
        value={newTodo}
        onChange={handleTextChange} 
        required
      />
     <select onChange={handlePriorityChange}>
      {renderPriorityOptions()}
     </select>
      <button type="submit">Add</button>
    </form>
  );
};  
