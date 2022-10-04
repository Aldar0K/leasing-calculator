import React, { ChangeEvent, FC } from 'react';
import './InitialField.scss';

interface InitialFieldProps {
  value: number;
  percent: number;
  isDisabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InitialField: FC<InitialFieldProps> = ({ value, percent, isDisabled, onChange }) => {
  return (
    <div className="calcualator__field initial">
      <div className="calculator__title">Первоначальный взнос</div>
      <div className="initial__field">
        <input
          className="initial__input"
          disabled={isDisabled}
          type="text"
          value={value.toLocaleString('ru') + ' ₽'}
          onChange={onChange}
        />
        <span className="initial__measure">{`${percent}%`}</span>
        <input
          className="initial__slider"
          disabled={isDisabled}
          type="range"
          min="10"
          max="60"
          step="1"
          value={percent}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InitialField;
