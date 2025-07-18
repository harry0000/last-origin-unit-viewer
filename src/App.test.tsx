import React from 'react';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { render } from '@testing-library/react';

import App from './App';

import './i18n/config';

test('renders without crashing', async () => {
  await React.act(() => {
    render(
      <RecoilRoot>
        <DndProvider backend={HTML5Backend}>
          <App/>
        </DndProvider>
      </RecoilRoot>,
    );
  });
});
