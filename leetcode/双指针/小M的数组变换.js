// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560667303980
function solution(n, a) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    function getPrimeFactors(x) {
        const factors = new Set();
        for (let p = 2; p * p <= x; p++) {
            while (x % p === 0) {
                factors.add(p);
                x = x / p;
            }
        }
        if (x > 1) {
            factors.add(x);
        }
        return factors;
    }

    const allFactors = new Set();
    for (const num of a) {
        if (num === 1) continue;
        const factors = getPrimeFactors(num);
        for (const factor of factors) {
            allFactors.add(factor);
        }
    }

    return allFactors.size <= n ? "Yes" : "No";
}

function main() {
    console.log(solution(4, [1, 2, 3, 4]) === "Yes");
    console.log(solution(2, [10, 12]) === "No");
    console.log(solution(3, [6, 9, 15]) === "Yes");
}

main();