const calculateTeamFinanceReport = function (salaries, team) {
  // Check if salary or tax are incorrect
  const isValidSalaries = Object.values(salaries).filter(
    (item) => item.salary < 100 || item.salary > 100000
  );

  const isValidHighTaxes = Object.values(salaries).filter(
    (item) => 99 < parseInt(item.tax)
  );
  const isValidLowTaxes = Object.values(salaries).filter(
    (item) => 0 > parseInt(item.tax)
  );
  if (isValidSalaries.length > 0) {
    console.log('Check your salaries, please');
    return;
  }

  if (isValidHighTaxes.length > 0 || isValidLowTaxes.length > 0) {
    console.log(`Check your tax rate, please`);
    return;
  }
  // calculate total budget

  const result = team.reduce(
    (prev = {}, item, index, array) => {
      // searching for position in salaries list
      if (item.specialization in salaries) {
        let salary = Math.round(salaries[item.specialization].salary);
        let tax = parseInt(salaries[item.specialization].tax) / 100;

        prev['totalBudgetTeam'] += Math.round(salary + salary * tax);

        // define, if posinion is already present in result obj
        `totalBudget${item.specialization}` in prev
          ? (prev[`totalBudget${item.specialization}`] += Math.round(
              salary + salary * tax
            ))
          : (prev[`totalBudget${item.specialization}`] = Math.round(
              salary + salary * tax
            ));
      }

      return prev;
    },
    { totalBudgetTeam: 0 }
  );
  return result;
};

module.exports = calculateTeamFinanceReport;
