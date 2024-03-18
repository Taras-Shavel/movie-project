import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import './index.css'
import {setupStore} from "./redux";
import {ThemeProvider} from "./context";




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();
root.render(

    <ThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>


);


