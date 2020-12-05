import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import Score from './components/score';
import Question from './components/question';
import Selection from './components/selection';
import Init from './components/init';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Score />
    <Init />
    <Question />
    <Selection />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
