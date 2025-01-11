function solution(x, y) {
    const distance = Math.sqrt(x * x + y * y);
    // Calculate score using mathematical formula
    return distance > 10 ? 0 : Math.max(0, 11 - Math.ceil(distance));
}

function main() {
    console.log(solution(1, 0) === 10);
    console.log(solution(1, 1) === 9);
    console.log(solution(0, 5) === 6);
    console.log(solution(3, 4) === 6);
}

main();
