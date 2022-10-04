import React, { useState, FC, ChangeEvent } from 'react';
import './Calculator.scss';
import { INTEREST_RATE } from 'components/constants';
import InitialField from 'components/InitialField';
import MonthsField from 'components/MonthsField';
import PriceField from 'components/PriceField';
import CalcButton from 'components/CalcButton';
import { sendRequest } from 'components/API';

const Calculator: FC = () => {
  const [price, setPrice] = useState<number>(3300000);
  const [percent, setPercent] = useState<number>(13);
  const initial = Math.floor((price / 100) * percent);
  const [months, setMonths] = useState<number>(60);

  const [loading, setLoading] = useState<boolean>(false);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Object.is(value, NaN)) {
      setPrice(value);
    }
  };

  const handlePriceBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1000000) {
      setPrice(1000000);
    }
    if (value > 6000000) {
      setPrice(6000000);
    }
  };

  const handleInitialChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!(Object.is(value, NaN) || value < 0 || value > 100)) {
      setPercent(value);
    }
  };

  const handleMonthsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Object.is(value, NaN)) {
      setMonths(value);
    }
  };

  const handleMonthsBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1) {
      setMonths(1);
    }
    if (value > 60) {
      setMonths(60);
    }
  };

  const handleButtonClick = () => {
    setLoading(true);

    sendRequest(price, initial, percent, months, totalSum, monthPay)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };

  const monthPay = Math.round(
    (price - initial) *
      ((INTEREST_RATE * Math.pow(1 + INTEREST_RATE, months)) /
        (Math.pow(1 + INTEREST_RATE, months) - 1))
  );

  const totalSum = initial + months * monthPay;

  return (
    <div className="calcualator">
      <div className="calcualator__fields">
        <PriceField
          value={price}
          onBlur={handlePriceBlur}
          onChange={handlePriceChange}
          isDisabled={loading}
        />
        <InitialField
          value={initial}
          percent={percent}
          onChange={handleInitialChange}
          isDisabled={loading}
        />
        <MonthsField
          value={months}
          onBlur={handleMonthsBlur}
          onChange={handleMonthsChange}
          isDisabled={loading}
        />
      </div>
      <div className="calcualator__bottom">
        <div className="calcualator__sum">
          <div className="calculator__title">Сумма договора лизинга</div>
          <h2 className="calculator__price">{totalSum.toLocaleString('ru')}</h2>
        </div>
        <div className="calcualator__payment">
          <div className="calculator__title">Ежемесячный платеж от</div>
          <h2 className="calculator__price">{monthPay.toLocaleString('ru')}</h2>
        </div>
        <CalcButton onClick={handleButtonClick} isLoading={loading} />
      </div>
    </div>
  );
};

export default Calculator;
