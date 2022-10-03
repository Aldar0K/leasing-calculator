import InitialField from 'components/InitialField';
import MonthsField from 'components/MonthsField';
import PriceField from 'components/PriceField';
import React, { useState, FC, ChangeEvent } from 'react';
import './Calculator.scss';

const Calculator: FC = () => {
  const [price, setPrice] = useState<number>(3300000);
  const [percent, setInitial] = useState<number>(13);
  const initial = Math.floor((price / 100) * percent);
  const [months, setMonths] = useState<number>(60);

  const [loading, setLoading] = useState<boolean>(false);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Object.is(value, NaN) || value < 0 || value > 6000000) {
      console.log('Not valid');
    } else {
      setPrice(value);
    }
  };

  const handleInitialChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Object.is(value, NaN) || value < 0 || value > 60) {
      console.log('Not valid');
    } else {
      if (value < 10) {
        setInitial(10);
      } else {
        setInitial(value);
      }
    }
  };

  const handleMonthsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Object.is(value, NaN) || value < 0 || value > 60) {
      console.log('Not valid');
    } else {
      setMonths(value);
    }
  };

  return (
    <div className="calcualator">
      <div className="calcualator__fields">
        <PriceField value={price} onChange={handlePriceChange} isDisabled={loading} />
        <InitialField
          value={initial}
          percent={percent}
          onChange={handleInitialChange}
          isDisabled={loading}
        />
        <MonthsField value={months} onChange={handleMonthsChange} isDisabled={loading} />
      </div>
      <div className="calcualator__bottom">
        <div className="calcualator__sum">
          <div className="calculator__title">Сумма договора лизинга</div>
          <h2 className="calculator__price">100000{}</h2>
        </div>
        <div className="calcualator__payment">
          <div className="calculator__title">Ежемесячный платеж от</div>
          <h2 className="calculator__price">100000{}</h2>
        </div>
        <button className="calculator__button">Оставить заявку</button>
      </div>
    </div>
  );
};

export default Calculator;
