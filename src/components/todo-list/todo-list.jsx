import React from "react";

// Components
import TodoItem from "../todo-item/todo-item";

// Material UI
import List from "@material-ui/core/List";

export default function TodoList({ todoItems, toggleCheck, toggleImportant }) {
  return (
    <List>
      {todoItems.map(({ id, text, checked, isImportant }) => {
        return (
          <TodoItem
            key={id}
            id={id}
            text={text}
            checked={checked}
            isImportant={isImportant}
            toggleCheck={() => toggleCheck(id)}
            toggleImportant={() => toggleImportant(id)}
          />
        );
      })}
    </List>
  );
}
