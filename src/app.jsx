import React, { useState } from "react";

// Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import BottomBar from "./components/bottom-bar/bottom-bar";
import TodoList from "./components/todo-list/todo-list";

// Material UI
import Box from "@material-ui/core/Box";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      text: "first text",
      checked: false,
      isImportant: false
    },
    {
      id: 2,
      text: "second text",
      checked: true,
      isImportant: false
    },
    {
      id: 3,
      text: "third text",
      checked: false,
      isImportant: true
    }
  ]);

  const handleToggleCheck = id => {
    const updatedState = todoItems.map(item => {
      if (item.id === id) item.checked = !item.checked;
      return item;
    });
    setTodoItems(updatedState);
  };

  const handleToggleImportant = id => {
    const updatedState = todoItems.map(item => {
      if (item.id === id) item.isImportant = !item.isImportant;
      return item;
    });
    setTodoItems(updatedState);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box mt={2}>
          <TodoList
            todoItems={todoItems}
            toggleCheck={handleToggleCheck}
            toggleImportant={handleToggleImportant}
          />
        </Box>
      </Container>
      <BottomBar counterTasks={todoItems.length} /> {/* Допилить счетчик*/}
    </>
  );
}

export default App;
