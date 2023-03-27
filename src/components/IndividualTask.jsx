import React from "react";
export const IndividualTask = ({ item, handleDelete, handleComplete }) => {
  return (
    <li className="taskList">
      <span
        style={{ textDecoration: item.completed ? "line-through" : "none", color: item.completed ? "green" : "none"
        }}> 
        <p>Thang to do: {item.text}</p>
        <p>Thang importance:  {item.priority}</p>

      <button onClick={() => handleDelete(item.id)}>Delete</button>
      <button onClick={() => handleComplete(item.id)}>{item.completed ? "Undo" : "Complete"}</button>
      </span>

      

    </li>
  );
};
