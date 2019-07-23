import React from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../../actions/todos";
import { toggleImportant } from "../../actions/todos";

// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import blue from "@material-ui/core/colors/blue";

const importantColor = blue[100];

function TodoItem({ id, text = "", dispatch, state }) {
  const checked = state.find(item => item.id === id).checked || false;
  const isImportant = state.find(item => item.id === id).isImportant || false;

  return (
    <Box mb={1}>
      <Paper>
        <ListItem
          style={isImportant ? { backgroundColor: importantColor } : null}
        >
          <Checkbox
            checked={checked}
            onChange={() => dispatch(toggleComplete(id))}
          />
          <ListItemText
            primary={text}
            style={checked ? { textDecoration: "line-through" } : null}
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={() => dispatch(toggleImportant(id))}
              checked={isImportant}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(TodoItem);
