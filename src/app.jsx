import React from "react";

// Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import BottomBar from "./components/bottom-bar/bottom-bar";
import TopBar from "./components/top-bar/top-bar";
import TodoList from "./components/todo-list/todo-list";

// Material UI
import Box from "@material-ui/core/Box";

function App() {
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
      <BottomBar />
    </>
  );
}

export default App;
