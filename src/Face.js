import React from 'react';
import './Face.scss';
import Eye from './Eye.js';
import Mouth from './Mouth.js';

const Face = () => {
  return (
    <div className="Face">
        <Eye />
        <Eye />
        <Mouth />
    </div>
  );
}

export default Face;
