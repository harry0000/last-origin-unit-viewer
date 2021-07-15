/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Spinner } from 'react-bootstrap';

import { useSquadRestoreFromUrl } from '../../state/squad/squadState';
import { ifTruthy } from '../../util/react';

const SquadRestore: React.FC = () => {
  const isRestoring = useSquadRestoreFromUrl();

  return ifTruthy(
    isRestoring,
    (
      <div
        css={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 10
        }}
      >
        <Spinner
          variant="light"
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  );
};

export default SquadRestore;
