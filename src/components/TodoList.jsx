import React, {useState }from "react";
import { InputForm } from "./InputForm";
import { IndividualTask } from "./IndividualTask";

export const TodoList = ({ list, setList, addTodo, handleDelete, handleComplete }) => {
  console.log("TodoList rendered");
  
const [sortDirection, setSortDirection] = useState("ascending");

const handleSortText = () => {
  const sortedList = [...list].sort((a, b) => {
    if (sortDirection === "ascending") {
      return a.text.localeCompare(b.text, "sv");
    } else {
      return b.text.localeCompare(a.text, "sv");
    }
  });
  setList(sortedList);
  setSortDirection(sortDirection === "ascending" ? "desc" : "ascending");
};

const handleSortCompleted = () => {
  const sortedList = [...list].sort((a, b) => {
    if (sortDirection === "ascending") {
      return a.completed - b.completed;
    } else {
      return b.completed - a.completed;
    }
  });
  setList(sortedList);
  setSortDirection(sortDirection === "ascending" ? "desc" : "ascending");
};

const handleSortPriority = () => {
  const sortedList = [...list].sort((a, b) => {
    if (sortDirection === "ascending") {
      return a.priority - b.priority;
    } else {
      return b.priority - a.priority;
    }
  });
  setList(sortedList);
  setSortDirection(sortDirection === "ascending" ? "desc" : "ascending");
};


function renderTasks(list, handleDelete, handleComplete) {
  return (
    <ul classname="listOfTasks">
      {list.map((task) => (
        <IndividualTask
          
          key={task.id}
          item={task}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </ul>
  );
}

return (
  <> 
  <div>
    <InputForm 
    addTodo={addTodo}


    />
    
    <button onClick={handleSortText}>Sort by A-Z</button>
    <button onClick={handleSortCompleted}>Sort by Completed </button>
    <button onClick={handleSortPriority}>Sort by Priority</button>
    </div>
    <div className="container">
    {renderTasks(list, handleDelete,handleComplete)}
    </div>
      
    
  </>
)};