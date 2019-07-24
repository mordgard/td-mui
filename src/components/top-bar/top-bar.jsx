import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/todos";

// Material UI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func
};

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: "auto"
  },
  container: {
    padding: 0
  }
}));

function TopBar({ children, dispatch, state }) {
  const classes = useStyles();
  const isSomeChecked = () => {
    return state.some(item => item.checked === true);
  };

  return (
    <React.Fragment>
      <HideOnScroll children={children}>
        <AppBar color="default">
          <Toolbar>
            <Typography variant="h6">Todo List</Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => dispatch(deleteTodo())}
              disabled={isSomeChecked() ? false : true}
            >
              Delete Selected
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container className={classes.container}>{children}</Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(TopBar);
