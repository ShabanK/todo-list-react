import React from "react";

const styles = {
  todoItem: { display: "flex", justifyContent: "center", marginTop: 35 },
  done: {
    display: "flex",
    justifyContent: "center",
    marginTop: 35,
    textDecoration: "line-through",
    color: "black"
  },
  line: { display: "inline-flex" }
};

function TodoItem(props) {
  return (
    <div
      className="todoitem"
      style={props.item.completed ? styles.done : styles.todoItem}
    >
      <input
        style={styles.line}
        type="checkbox"
        checked={props.item.completed}
        onChange={() => {
          props.handleChange(props.item.id);
        }}
      />
      <p style={styles.line}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
