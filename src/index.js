import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mongoose from "mongoose";


// Nodd.js Server Back-end
//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/react-quiz`);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
