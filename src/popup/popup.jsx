/* global document */

import React from "react";
import ReactDOM from "react-dom";
import Popup from "./containers/popup/popup";
import GotoSignin from "./containers/gotoSignin/GotoSignin";
import ext from "./../utils/ext";
import { MSG_CHECKAUTH } from "./../utils/constant";

ext.runtime.sendMessage({ type: MSG_CHECKAUTH }, function(data) {
  if (data.isAuth) {
    ReactDOM.render(<Popup />, document.getElementById("display-container"));
  } else {
    ReactDOM.render(
      <GotoSignin />,
      document.getElementById("display-container")
    );
  }
});
