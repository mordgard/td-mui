import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// Components
import TodoItem from "../todo-item/todo-item";

import { fetchTodos } from "../../actions/todos";

function isEmpty(arr) {
  if (arr.length !== 0) return true;
  return false;
}

function TodoList({ todos }) {
  useEffect(() => {
    fetchTodos();
    return;
  });

  return (
    <List>
      {isEmpty(todos) ? (
        todos.map(({ id, text, isLoading }) => {
          return isLoading ? (
            <Box key={id} display="flex" justifyContent="center" mb={1}>
              <CircularProgress />
            </Box>
          ) : (
            <TodoItem key={id} id={id} text={text} />
          );
        })
      ) : (
        <Box display="flex" justifyContent="center">
          <Typography variant="h6" align="center">
            Click "+" button below to add todos
          </Typography>
        </Box>
      )}
    </List>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTodos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
