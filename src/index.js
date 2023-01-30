import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./server";
import mockedApi from "./server";
//import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line no-undef
if (process.env.REACT_APP_ENVIRONMENT === "mirage") {
	mockedApi();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<App />
);


