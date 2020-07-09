import React from 'react';
import './ControlBoard.scss';
import Button from './Button';

const ControlBoard = () => {

  const handleLeftEyeClick = () => {
    alert("hi")
  }

  const handleRightEyeClick = () => {
    alert("bye")
  }



  return (
    <div className="control-board">
        <Button action={handleLeftEyeClick} label="wink" />
        <Button action={handleRightEyeClick} label="me" />
    </div>
  );
}

export default ControlBoard;
