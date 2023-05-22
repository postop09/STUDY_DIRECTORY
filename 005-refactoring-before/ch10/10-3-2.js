export function adjustedCapital(instrument) {
  const isAdjustedCapital = (instrument) => {
    return (
      instrument.capital > 0 &&
      instrument.interestRate > 0 &&
      instrument.duration > 0
    );
  };

  if (!isAdjustedCapital(instrument)) return 0;

  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}
