import React from "react";

// Components
import TodoItem from "../todo-item/todo-item";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

export default function TodoList({ todoItems, toggleCheck, toggleImportant }) {
  return (
    <List>
      {todoItems.map(item => {
        const { id, text, checked, isImportant } = item;
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
