import Calculator from 'components/Calculator';
import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container header__container">
          <h1 className="header__title">Рассчитайте стоимость автомобиля в лизинг</h1>
        </div>
      </header>
      <main className="main">
        <div className="container main__container">
          <Calculator />
        </div>
      </main>
    </div>
  );
}

export default App;
