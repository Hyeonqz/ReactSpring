import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstApp from './components/FirstApp';
import ThirdApp from './components/ThirdApp';
import FouthApp from './components/FouthApp';
import FifthApp from './components/FifthApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App />
    <FirstApp/> 
    <secondsApp/> */}
    {/* <ThirdApp/>
    <FouthApp/> */}
    <FifthApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
