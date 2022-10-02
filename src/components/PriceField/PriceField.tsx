import React, { ChangeEvent, FC } from 'react';
import './PriceField.scss';

interface PriceFieldProps {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PriceField: FC<PriceFieldProps> = ({ value, onChange }) => {
  return (
    <div className="calcualator__price price">
      <div className="price__title">Стоимость автомобиля</div>
      <div className="price__field">
        <input className="price__input" type="text" value={value} onChange={onChange} />
        <span className="price__rub">₽</span>
      </div>
    </div>
  );
};

export default PriceField;
