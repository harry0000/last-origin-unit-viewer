import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';

import './i18n/config';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RecoilRoot>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </RecoilRoot>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
