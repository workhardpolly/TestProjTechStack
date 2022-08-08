const calculateTeamFinanceReport = require('./calculateTeamFinanceReport.js');

const team1 = [
  { name: 'Misha', specialization: 'Manager' },
  { name: 'Max', specialization: 'Designer' },
  { name: 'Vova', specialization: 'Designer' },
  { name: 'Leo', specialization: 'Artist' },
];

const salaries1 = {
  Manager: { salary: 1000, tax: '0%' },
  Designer: { salary: 6000000.42, tax: '30%' },
  Artist: { salary: 1500.99, tax: '15%' },
};

const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
console.log(JSON.stringify(financeReport1));

const salaries2 = {
  TeamLead: { salary: 1000, tax: '10%' },
  Architect: { salary: 900.255, tax: '34%' },
};
const team2 = [
  { name: 'Alexander', specialization: 'TeamLead' },
  { name: 'Gaudi', specialization: 'Architect' },
  { name: 'Koolhas', specialization: 'Architect' },
  { name: 'Foster', specialization: 'Architect' },
  { name: 'Napoleon', specialization: 'General' },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));
