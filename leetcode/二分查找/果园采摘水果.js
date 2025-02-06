// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653370933292
function solution(fruits) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    if (fruits.length <= 2) return fruits.length;

    let left = 0; 
    let maxFruits = 0;
    const fruitCount = new Map();

    for (let right = 0; right < fruits.length; right++) {
        fruitCount.set(fruits[right], (fruitCount.get(fruits[right]) || 0) + 1);
        while (fruitCount.size > 2) {
            fruitCount.set(fruits[left], fruitCount.get(fruits[left]) - 1);
            if (fruitCount.get(fruits[left]) === 0) {
                fruitCount.delete(fruits[left]);
            }
            left++;
        }
        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
}

function main() {
    console.log(solution([1, 2, 3, 2, 2, 4]) === 4);
    console.log(solution([1, 2, 1, 2]) === 4);
    console.log(solution([2, 0, 1, 2, 2]) === 3);
}
main();
