import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import mystore from './components/Redux/store';
import { Provider } from 'react-redux';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={mystore}>
    <App />
    <ToastContainer autoClose={2000} />
    </Provider>
);

reportWebVitals();
