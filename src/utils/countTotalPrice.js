export const countTotalPrice = (plan, addOns) =>
  plan + addOns.reduce((total, currentValue) => total + currentValue.price, 0);
