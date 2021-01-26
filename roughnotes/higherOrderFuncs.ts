/* eslint-disable no-plusplus */
// Basic

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   const element = companies[i];
//   console.log(element);
// }

// companies.forEach((company) => {
//   console.log(company); // access indiviudal elements
// });

// filter

// const canDrink = ages.filter((age) => age >= 21);
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail',
);

// get 80s comapnies
// const eightiesCompanies = companies.filter(
//   (company) => company.start <= 1989 && company.start >= 1980,
// );

// lasted 10 years
const decadeOldOrgs = companies.filter(
  (company) => company.end - company.start >= 10,
);

// console.log(canDrink);
// console.log(retailCompanies);
// console.log(eightiesCompanies);
// console.log(decadeOldOrgs);

// map

// Create array of company names
const companyNames = companies.map((company) => company.name);
const companyStrings = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`,
);
// console.log(companyStrings);

const rootAges = ages.map((age) => age ** 0.5); // square root
const agesTimesTwo = ages.map((age) => age * 2);
// console.log(agesTimesTwo);

// sort
const sortedOrgs = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortedOrgs);

// reduce
const ageSum = ages.reduce((total, age) => total + age);
// console.log(ageSum);
const totalYears = companies.reduce(
  (total, company) => total + (company.end + company.start),
);
