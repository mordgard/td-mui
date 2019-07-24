import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/todos";

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

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(
//     {
//       deleteTodo
//     },
//     dispatch
//   )
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
