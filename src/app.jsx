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
  const [todoItems, setTodoItems] = useState([]);

  const handleAdd = text => {
    const updatedState = [
      ...todoItems,
      {
        id: ID(),
        text: text,
        isDone: false,
        isImportant: false
      }
    ];
    setTodoItems(updatedState);
  };

  return (
    <>
      <CssBaseline />
      <TopBar>
        <Container maxWidth="sm">
          <Box mt={2} mb={8} p={0}>
            <TodoList />
          </Box>
        </Container>
      </TopBar>
      <BottomBar onAdd={handleAdd} />
    </>
  );
}

export default App;
