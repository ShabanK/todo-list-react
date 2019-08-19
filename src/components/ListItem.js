import React from "react";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: 35
};

const line = {
  display: "inline-flex"
};

function TodoItem(props) {
  return (
    <div className="todoitem" style={styles}>
      <input style={line} type="checkbox" />
      <p style={line}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
