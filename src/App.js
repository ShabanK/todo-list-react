import React from "react";
import TodoItem from "./components/ListItem.js";
import todosData from "./todosItem.js";

function App() {
  const todoItem = todosData.map(item => {
    return <TodoItem key={item.id} item={item} />;
  });

  return <div className="todolist">{todoItem}</div>;
}

export default App;
