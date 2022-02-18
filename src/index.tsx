import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {dispatch, state, subscriber} from './Components/Redux/State';



export const rerenderTree = () => {

        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App
                        state={state}
                        dispatch={dispatch}
                    />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')

    )
}

subscriber(rerenderTree)
rerenderTree()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
