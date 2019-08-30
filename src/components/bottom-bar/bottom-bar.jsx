import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";

import { addTodo } from "../../actions/todos";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

function BottomBar({ state, addTodo }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();
  const allTasks = state.length;
  const doneTasks = state.filter(item => {
    return item.checked === true;
  }).length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Tooltip title="Search" enterDelay={1000}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add task" enterDelay={1000}>
            <Fab
              color="secondary"
              aria-label="Add"
              className={classes.fabButton}
              onClick={handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </Tooltip>

          <Box flex={1} />
          <Typography variant="body1">
            Done: {doneTasks}/{allTasks}
          </Typography>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add new task"
            type="text"
            value={inputValue}
            fullWidth
            onChange={e => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              setInputValue("");
              addTodo(inputValue);
            }}
            color="primary"
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBar);
