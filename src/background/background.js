import ext from "./../utils/ext";
import {
  BASE_URL,
  API_CHECK_AUTH,
  MSG_CHECKAUTH
} from "./../utils/constant.js";
import "babel-polyfill";
import axios from "axios";

/**
 * instance for calling backend
 *
 */
console.log(BASE_URL);
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  transformRequest: [
    (data, headers) => {
      console.log("===== request header from client =====", headers);
      console.log("===== request data from client=====", data);
      return data;
    }
  ],
  transformResponse: [
    data => {
      let resp;
      try {
        resp = JSON.parse(data);
      } catch (error) {
        throw Error(
          `[requestClient] Error parsing response JSON data - ${JSON.stringify(
            error
          )}`
        );
      }
      console.log("===== response data from server =====", resp);
      return resp;
    }
  ],
  timeout: 10000,
  validateStatus: status => {
    console.log("===== response status code from server =====", status);
    return status >= 200 && status < 300; // default
  }
});

/**
 * Define content script functions
 * @type {class}
 */
class Background {
  constructor() {
    this._port;
    this._mainTab;
    this.init();
  }

  /**
   * Document Ready
   * @returns {void}
   */
  init() {
    console.log("loaded BackgroundScripts");

    //Redirect to google OAuth when extension installed
    ext.runtime.onInstalled.addListener(() => this.onInstalled());

    //Add message listener in Browser.
    ext.runtime.onMessage.addListener((message, sender, reply) =>
      this.onMessage(message, sender, reply)
    );

    //Add message listener from Extension
    ext.extension.onConnect.addListener(port => this.onConnect(port));

    //Add Update listener for tab
    ext.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>
      this.onUpdatedTab(tabId, changeInfo, tab)
    );

    // //Add Listener for browser action
    // ext.browserAction.onClicked.addListener(tabId =>
    //   this.onClickedExtension(tabId)
    // );
  }

  /**
   * Extension Installed Handler
   */
  onInstalled() {
    console.log("Installed Palawan Extension! Redirect to Auth page!");
  }

  /**
   * Clicked Extension ICON
   *
   * @param {*} tabId
   */
  onClickedExtension(tabId) {
    console.log("Browser Action!", tabId);
  }

  /**
   * Message Handler Function
   *
   * @param { object } message
   * @param { object } sender
   * @param { object } reply
   */
  onMessage(message, sender, reply) {
    console.log("Message from ContentScript", message);
    switch (message.type) {
      case MSG_CHECKAUTH: {
        //message for checking Auth
        axios
          .post(API_CHECK_AUTH)
          .then(function(res) {
            reply({ isAuth: true });
          })
          .catch(function(err) {
            reply({ isAuth: false });
          });
        break;
      }
    }
    return true;
  }

  /**
   * Connect with Extension
   *
   * @param {*} port
   */
  onConnect(port) {
    this._port = port;
    console.log("Connected .....");
    this._port.onMessage.addListener(msg => this.onMessageFromExtension(msg));
  }

  /**
   * Message from Extension
   *
   * @param {*} msg
   */
  onMessageFromExtension(msg) {
    console.log("message recieved:" + msg);
  }

  /**
   *Handle Updated Tab Info
   *
   * @param {*} tabId
   * @param {*} changeInfo
   * @param {*} tab
   */
  onUpdatedTab(tabId, changeInfo, tab) {
    if (tab.url.indexOf("mail.google.com") > -1) {
      // Shows the page action
      ext.pageAction.show(tabId);
    }
  }
}

export const background = new Background();
