import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Auth0Provider } from "@auth0/auth0-react";
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StateProvider initialState={initialState} reducer={reducer}>
    <App />
   </StateProvider>
);

