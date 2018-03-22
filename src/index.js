import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Utilities
import places from './Utilities/places';

ReactDOM.render(<App places={places}/>, document.getElementById('root'));
registerServiceWorker();
