export const formatTwoDecimals = (value: string) => {
  return parseFloat(value).toFixed(2);
};

export const formatFiveDecimals = (value: string) => {
  return parseFloat(value).toFixed(5);
};

export const calculateHoldings = (balance: string, price: string) => {
  const holdings = parseFloat(balance) * parseFloat(price);
  return holdings.toFixed(2);
};
