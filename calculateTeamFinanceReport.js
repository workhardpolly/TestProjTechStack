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
  } else {
    // calculate total budget
    const totalBudget = {};
    totalBudget.totalBudgetTeam = 0;
    team.reduce((prev, item, index, array) => {
      // searching for position in salaries list
      if (item.specialization in salaries) {
        let salary = Math.round(salaries[item.specialization].salary);
        let tax = Math.round(parseInt(salaries[item.specialization].tax) / 100);

        totalBudget['totalBudgetTeam'] += salary + salary * tax;
        // define, if posinion is already present in result obj
        `totalBudget${item.specialization}` in totalBudget
          ? (totalBudget[`totalBudget${item.specialization}`] +=
              salary + salary * tax)
          : (totalBudget[`totalBudget${item.specialization}`] =
              salary + salary * tax);
      }
    }, 0);
    return totalBudget;
  }
};

module.exports = calculateTeamFinanceReport;
