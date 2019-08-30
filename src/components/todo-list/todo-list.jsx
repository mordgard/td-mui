import React from "react";
import { connect } from "react-redux";

// Material UI
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

// Components
import TodoItem from "../todo-item/todo-item";

function TodoList({ todos }) {
  return (
    <List>
      {todos.map(({ id, text, isLoading }) => {
        return isLoading ? (
          <Box key={id} display="flex" justifyContent="center" mb={1}>
            <CircularProgress />
          </Box>
        ) : (
          <TodoItem key={id} id={id} text={text} />
        );
      })}
    </List>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps)(TodoList);
