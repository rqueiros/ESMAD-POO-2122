// 3a
const grades = [4, 12, 16, 11, 8];

// 3b
// find - devolve a primeira nota positiva que encontra
const firstPositive = grades.find((grade) => grade >= 10);
console.log('3b', firstPositive);

// 3c
function getPositiveGrades() {
	// filter - devolve todas as notas positivas num array
	return grades.filter((grade) => grade >= 10);
}
console.log('3c', getPositiveGrades());

// 3d
function checkDisapprovals() {
    // some - devolve true se pelo menos uma condição for verdadeira
	return grades.some((grade) => grade < 10);
}
console.log('3d', checkDisapprovals());

// 3e
function validateGrades() {
    // every - devolve true se todas as condições forem verdadeiras
	return grades.every((grade) => grade >= 0 && grade <= 20);
}
console.log('3e', validateGrades());
