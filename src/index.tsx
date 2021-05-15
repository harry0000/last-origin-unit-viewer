import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import './i18n/config';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
