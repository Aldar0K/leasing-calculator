import PriceField from 'components/PriceField';
import React, { useState, FC, ChangeEvent } from 'react';
import './Calculator.scss';

const Calculator: FC = () => {
  const [price, setPrice] = useState<number>(3300000);
  // const [initial, setInitial] = useState<number>(13);
  // const [months, setMonths] = useState<number>(60);

  const [loading, setLoading] = useState<boolean>(false);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Object.is(value, NaN) || value < 0 || value > 6000000) {
      console.log('Not valid');
    } else {
      setPrice(value);
    }
  };

  return (
    <div className="calcualator">
      <div className="calcualator__fields">
        <PriceField value={price} onChange={handlePriceChange} isDisabled={loading} />
        {/* <InitialField value={initial} /> */}
        {/* <MonthsField value={months} /> */}
      </div>
      <div className="calcualator__bottom">
        <div className="calcualator__sum"></div>
        <div className="calcualator__payment"></div>
        <button className="calculator__button"></button>
      </div>
    </div>
  );
};

export default Calculator;
