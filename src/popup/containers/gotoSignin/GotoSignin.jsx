import React, { Component } from "react";
import "./style.scss";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AUTH_URL } from "./../../../utils/constant";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function onClickSignin() {
  console.log("clicked sign in button!");
  window.open(AUTH_URL);
}

export default function UnAuthedPopUp() {
  const classes = useStyles();
  return (
    <Container>
      <h3>Please signin to use our extension!</h3>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={onClickSignin}
      >
        Sign in
      </Button>
    </Container>
  );
}
