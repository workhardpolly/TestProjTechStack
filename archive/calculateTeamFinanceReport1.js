const calculateTeamFinanceReport = function (team, wages) {
  const arrayOfTeam = [];
  //extracting specialities to array
  team.forEach((item, index, array) => {
    arrayOfTeam.push(item.specialization);
  });
  // counting total members by speciality
  const sumMembersOfTeam = arrayOfTeam.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  // extracting specialities for fetching
  const propsSumMembersOfTeam = Object.getOwnPropertyNames(sumMembersOfTeam);
  // put total members in to array for calculation
  const valuesSumMembersOfTeam = Object.values(sumMembersOfTeam);

  const totalBudget = {};
  let totalBudgetTeam = null;

  // calculation
  for (let a = 0; a < propsSumMembersOfTeam.length; a++) {
    for (key in wages) {
      if (propsSumMembersOfTeam[a] === key) {
        let currentPosition = Object.values(wages[key]);

        if (100000 < currentPosition[0] || currentPosition[0] < 100) {
          return console.log(`wrong salary of ${key}`);
        } else if (
          99 < parseInt(currentPosition[1]) ||
          parseInt(currentPosition[1]) < 0
        ) {
          return console.log(`wrong tax rate of ${key}`);
        } else {
          let salaryOfOneMember = Math.round(
            (currentPosition[0] * parseInt(currentPosition[1])) / 100 +
              currentPosition[0]
          );

          let positionCost = salaryOfOneMember * valuesSumMembersOfTeam[a];

          totalBudget[`totalBudget${propsSumMembersOfTeam[a]}`] = positionCost;

          totalBudgetTeam = totalBudgetTeam + positionCost;
        }
      }
    }
  }

  totalBudget.totalBudgetTeam = totalBudgetTeam;

  return totalBudget;
};

module.exports = calculateTeamFinanceReport;
