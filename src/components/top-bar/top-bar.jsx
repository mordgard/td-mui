import React from "react";
import { connect } from "react-redux";

// Material UI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Info from "@material-ui/icons/Info";
import Done from "@material-ui/icons/DoneAll";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";

import { deleteTodo } from "../../actions/todos";

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
            <Tooltip title="Show important">
              <IconButton color="default">
                <Info />
              </IconButton>
            </Tooltip>
            <Tooltip title="Show completed">
              <IconButton color="default">
                <Done />
              </IconButton>
            </Tooltip>
            {/* <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => dispatch(deleteTodo())}
              disabled={isSomeChecked() ? false : true}
            >
              Delete Selected
            </Button> */}
            <Tooltip title="Delete selected">
              <Box ml="auto">
                <IconButton
                  color="secondary"
                  onClick={() => dispatch(deleteTodo())}
                  disabled={isSomeChecked() ? false : true}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Tooltip>
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
