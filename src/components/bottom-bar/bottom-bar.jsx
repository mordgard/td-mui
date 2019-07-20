import React, { useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
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
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
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

export default function BottomBar({ counterTasks, onInputChange }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();
  const allTasks = counterTasks.length; // Всего задач
  const doneTasks = counterTasks.filter(item => {
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
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.fabButton}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
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
            label="Task"
            type="email"
            value={inputValue}
            fullWidth
            onChange={e => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
