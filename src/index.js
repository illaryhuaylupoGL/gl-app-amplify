import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(awsconfig);

ReactDOM.render(
<React.StrictMode>
  
<App />
</React.StrictMode>,
document.getElementById('root')
);

serviceWorker.unregister();