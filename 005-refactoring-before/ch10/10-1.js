function calculateCharge(date, quantity, plan) {
  let charge = 0;
  const isSummer = () => {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  };

  const summerCharge = () => {
    return quantity * plan.summerRate;
  };

  const regularCharge = () => {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  };

  return isSummer() ? summerCharge() : regularCharge();
}
