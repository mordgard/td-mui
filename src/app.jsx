import React, { useState } from "react";
import ID from "./utils/id-generator";

// Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import BottomBar from "./components/bottom-bar/bottom-bar";
import TopBar from "./components/top-bar/top-bar";
import TodoList from "./components/todo-list/todo-list";

// Material UI
import Box from "@material-ui/core/Box";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: ID(),
      text: "first text",
      checked: false,
      isImportant: false
    },
    {
      id: ID(),
      text: "second text",
      checked: true,
      isImportant: false
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: true
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: false
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: false
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: false
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: true
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: false
    },
    {
      id: ID(),
      text: "third text",
      checked: true,
      isImportant: false
    },
    {
      id: ID(),
      text: "third text",
      checked: false,
      isImportant: false
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
      <TopBar>
        <Container maxWidth="sm">
          <Box mt={2} mb={8}>
            <TodoList
              todoItems={todoItems}
              toggleCheck={handleToggleCheck}
              toggleImportant={handleToggleImportant}
            />
          </Box>
        </Container>
      </TopBar>
      <BottomBar counterTasks={todoItems} /> {/* Допилить счетчик*/}
    </>
  );
}

export default App;
