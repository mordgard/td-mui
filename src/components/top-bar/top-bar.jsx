import React from "react";
import { bindActionCreators } from "redux";
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
import Visibility from "@material-ui/icons/VisibilityOff";
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

function TopBar({ children, state }) {
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
              <Box>
                <IconButton disabled={false} color="default">
                  <Info />
                </IconButton>
              </Box>
            </Tooltip>
            <Tooltip title="Show completed">
              <Box>
                <IconButton disabled={false} color="default">
                  <Done />
                </IconButton>
              </Box>
            </Tooltip>
            <Tooltip title="Hide all">
              <Box>
                <IconButton disabled={false} color="default">
                  <Visibility />
                </IconButton>
              </Box>
            </Tooltip>
            <Tooltip title="Delete selected">
              <Box ml="auto">
                <IconButton
                  color="secondary"
                  onClick={() => deleteTodo()}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteTodo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
