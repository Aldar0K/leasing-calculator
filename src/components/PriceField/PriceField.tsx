import React, { FC, ChangeEvent } from 'react';
import './PriceField.scss';

interface PriceFieldProps {
  value: number;
  isDisabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PriceField: FC<PriceFieldProps> = ({ value, isDisabled, onChange }) => {
  return (
    <div className="calcualator__field price">
      <div className="calculator__title">Стоимость автомобиля</div>
      <div className="price__field">
        <input
          className="price__input"
          disabled={isDisabled}
          type="text"
          value={value.toLocaleString('ru')}
          onChange={onChange}
        />
        <span className="price__measure">₽</span>
        <input
          className="price__slider"
          disabled={isDisabled}
          type="range"
          min="1000000"
          max="6000000"
          step="50000"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PriceField;
