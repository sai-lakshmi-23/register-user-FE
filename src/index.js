import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  /** Your theme override here */
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
