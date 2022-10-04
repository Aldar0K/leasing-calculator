import React, { ChangeEvent, FC } from 'react';
import './MonthsField.scss';

interface MonthsFieldProps {
  value: number;
  isDisabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MonthsField: FC<MonthsFieldProps> = ({ value, isDisabled, onChange, onBlur }) => {
  return (
    <div className="calcualator__field months">
      <div className="calculator__title">Срок лизинга</div>
      <div className="months__field">
        <input
          className="months__input"
          disabled={isDisabled}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className="months__measure">мес.</span>
        <input
          className="months__slider"
          disabled={isDisabled}
          type="range"
          min="1"
          max="60"
          step="1"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MonthsField;
