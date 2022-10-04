import React, { FC } from 'react';
import Loader from 'react-ts-loaders';
import './CalcButton.scss';

interface CalcButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

const CalcButton: FC<CalcButtonProps> = ({ isLoading, onClick }) => {
  return (
    <button disabled={isLoading} onClick={onClick} className="button">
      {isLoading ? (
        <Loader type="ring" color="white" size={50} className="button__loader" />
      ) : (
        'Оставить заявку'
      )}
    </button>
  );
};

export default CalcButton;
