import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import blue from "@material-ui/core/colors/blue";

const importantColor = blue[100];

export default function TodoItem({
  id,
  text,
  checked,
  isImportant,
  toggleCheck,
  toggleImportant
}) {
  return (
    <Box mb={1}>
      <Paper>
        <ListItem
          style={isImportant ? { backgroundColor: importantColor } : null}
        >
          <Checkbox
            checked={checked}
            onChange={toggleCheck}
            value="checkedA"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
          <ListItemText
            id="switch-list-label-bluetooth"
            primary={text}
            style={checked ? { textDecoration: "line-through" } : null}
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={toggleImportant}
              checked={isImportant}
              inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </Box>
  );
}
