function disabilityAmount(employee) {
  const isNotDisability = (employee) => {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12 ||
      employee.isPartTime
    );
  };

  return isNotDisability(employee) ? 0 : 1;
}
