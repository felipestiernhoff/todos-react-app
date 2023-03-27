import React, { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import "./App.css"


function App() {

  // const [newTodo, setNewTodo] = useState("");
  // const [priority, setPriority] = useState(""); 

const [list, setList] = useState(() => {
    const storedLists = JSON.parse(localStorage.getItem("todo-list"));
  if (!storedLists || storedLists.length === 0) {
    return [
      { id: 1, text: "Get rich", priority: 3, completed: false },
      { id: 2, text: "Stay humble", priority: 10, completed: false },
      { id: 3, text: "Get money", priority: 9, completed: false }
    ];
  }
  return storedLists;
});

useEffect(() => {
  const savedList = localStorage.getItem("task-list");
  if (savedList) {
    setList(JSON.parse(savedList));
    
  }
}, []);

useEffect(() => {
  localStorage.setItem("task-list", JSON.stringify(list));

});

const addTodo = (newTask) => {
  const newId = Date.now() + Math.floor(Math.random() * 1000);
  const todo = { id: newId, ...newTask };
  setList([...list, todo]);
  console.log(list);
};

const handleDelete = (id) => {
  const updatedList = list.filter((task) => task.id !== id);
  setList(updatedList);

};

const handleComplete = (id) => {
  const updatedList = list.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setList(updatedList);
};

return (
  <>
    <h2>Felipe's Todo List</h2>
    <TodoList
      list={list}
      setList={setList}
      addTodo={addTodo}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
    />
  </>
);
};

export default App;