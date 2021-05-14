import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

import './i18n/config';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecoilRoot><App /></RecoilRoot>, div);
  ReactDOM.unmountComponentAtNode(div);
});
