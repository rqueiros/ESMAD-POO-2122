// 4a
const ages = [1, 9, 41, 75, 44, 73];
// 4b
const fiveYearsFromNowAges = ages.map((age) => age + 5);
console.log('4b', fiveYearsFromNowAges);
// 4c
const sumAges = ages.reduce((sum, age) => (sum += age));
console.log('4c', sumAges);
// 4d
const average = sumAges / ages.length;
console.log('4d', average);
// 4e
const adults = ages.map((age) => (age < 18 ? '-' : age));
console.log('4e', adults);
// 4f
// sort - devolve o array ordenado e altera no mesmo
const sortedAges = ages.sort((a, b) => parseInt(a) - parseInt(b));
console.log(sortedAges, ages);
// 4g
// reverse - devolve o array invertido e altera no mesmo
const inverseOrderedAges = sortedAges.reverse();
console.log(inverseOrderedAges, ages);
