import React from "react";
import { connect } from "react-redux";

// Components
import TodoItem from "../todo-item/todo-item";

// Material UI
import List from "@material-ui/core/List";

function TodoList({ state }) {
  return (
    <List>
      {state.map(({ id, text }) => {
        return <TodoItem key={id} id={id} text={text} />;
      })}
    </List>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(TodoList);
