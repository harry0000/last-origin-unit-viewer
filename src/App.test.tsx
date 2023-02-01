import React from 'react';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import App from './App';

import './i18n/config';

test('renders without crashing', async () => {
  await act(() => {
    render(
      <RecoilRoot>
        <DndProvider backend={HTML5Backend}>
          <App/>
        </DndProvider>
      </RecoilRoot>,
    );
  });
});
