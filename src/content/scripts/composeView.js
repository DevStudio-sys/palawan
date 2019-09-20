import {} from "./../../utils/constant.js";
import ext from "./../../utils/ext";

class ComposeView {
  constructor(props) {
    this._composeView = props;
    console.log("loaded ComposeView", props);
    this.init();
  }

  init() {
    // Add Events for ComposeView

    this._composeView.on("destroy", event => this.onDestroy(event)); //Add Destroy Event

    this._composeView.on("presending", event => this.onPresending(event)); //Add Presending Event

    this._composeView.on("sent", event => this.onSent(event)); //Add Sent Event
  }

  /**
   *Destroy Event for ComposeView
   *
   * @param { object | { messageID: string, closedByInboxSDK: boolean } } event
   */
  onSent(event) {
    console.log(event);
  }

  /**
   *Destroy Event for ComposeView
   *
   * @param { object | { messageID: string, closedByInboxSDK: boolean } } event
   */
  onDestroy(event) {
    console.log(event);
  }

  /**
   * Presending Event for ComposeView
   *
   * @param { cancel() | function } event
   */
  onPresending(event) {
    console.log(event);
  }
}

export const composeView = props => {
  return new ComposeView(props);
};
