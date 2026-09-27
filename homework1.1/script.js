/* 1 */
function calaireArea(length, width) {
    let calaireArea = length * width;
    return calaireArea;
}
console.log(calaireArea(5, 10));

/* 2 */
function isPrime(number) {
    let divisor = 2;

    while (divisor < number) {
        if (number % divisor == 0) {
            return false;
        }

        divisor = divisor + 1;
    }

    return true;
}
console.log(isPrime(7))
console.log(isPrime(12))
console.log(isPrime(23))

/* 3 */
function gradeCalculator(score){
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else if (score < 60) {
        return "F";
    }
}
console.log(gradeCalculator(95))
console.log(gradeCalculator(32))

/* 4 */
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2024))