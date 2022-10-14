export const sendRequest = async (
  carCoast: number,
  initialPayment: number,
  initialPercent: number,
  leaseTerm: number,
  totalSum: number,
  monthlyPaymentFrom: number
) => {
  const response = await fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      car_coast: carCoast,
      initail_payment: initialPayment,
      initail_payment_percent: initialPercent,
      lease_term: leaseTerm,
      total_sum: totalSum,
      monthly_payment_from: monthlyPaymentFrom,
    }),
  });

  return await response.json();
};
