import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';

import * as gtag from './gtag';

import './i18n/config';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css';

import App from './App';

gtag.initialize();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <DndProvider options={HTML5toTouch}>
        <App />
      </DndProvider>
    </RecoilRoot>
  </React.StrictMode>
);
