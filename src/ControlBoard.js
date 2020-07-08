import React from 'react';
import './ControlBoard.scss';
import Button from './Button';

const ControlBoard = () => {

  const handleWinkClick = () => {
    alert("hi")
  }

  return (
    <div className="ControlBoard">
      <Button action={handleWinkClick} label="wink" />
      <Button action={handleWinkClick} label="me" />
    </div>
  );
}

export default ControlBoard;
