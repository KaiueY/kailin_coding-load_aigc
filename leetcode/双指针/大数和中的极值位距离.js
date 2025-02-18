// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7414004855075782700
function solution(string1, string2) {
    const maxLength = Math.max(string1.length, string2.length);
    string1 = string1.padStart(maxLength, '0');
    string2 = string2.padStart(maxLength, '0');
    let carry = 0;
    let result = '';
    let maxDigit = -1;
    let minDigit = 10;
    let maxIndices = [];
    let minIndices = [];

    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(string1[i]) + parseInt(string2[i]) + carry;
        const digit = sum % 10;
        carry = Math.floor(sum / 10);
        result = digit + result;

        // 更新最大值索引
        if (digit > maxDigit) {
            maxDigit = digit;
            maxIndices = [i]; // 清空并存储新索引
        } else if (digit === maxDigit) {
            maxIndices.push(i); // 添加新索引
        }

        // 更新最小值索引
        if (digit < minDigit) {
            minDigit = digit;
            minIndices = [i]; // 清空并存储新索引
        } else if (digit === minDigit) {
            minIndices.push(i); // 添加新索引
        }
    }

    // 处理最高位进位
    if (carry > 0) {
        result = carry + result;
        if (carry > maxDigit) {
            maxDigit = carry;
            maxIndices = [0]; // 最高位进位是新的最大值
            for(let i=0;i<maxIndices.length;i++){
                maxIndices[i]++
            }
        } else if (carry === maxDigit) {
            maxIndices.push(0); // 最高位进位与当前最大值相同
        }

        if (carry < minDigit) {
            minDigit = carry;
            minIndices = [0]; // 最高位进位是新的最小值
            console.log(maxIndices);
            
            for(let i=0;i<maxIndices.length;i++){
                maxIndices[i]++
            }
        
            
        } else if (carry === minDigit) {
            minIndices.push(0); // 最高位进位与当前最小值相同
        }
    }

    // 如果所有数字相同，返回0
    if (maxDigit === minDigit) {
        return 0;
    }

    // 计算最小位置差
    let minDifference = Infinity;
    for (const maxIndex of maxIndices) {
        for (const minIndex of minIndices) {
            console.log(maxIndex, minIndex);
            const difference = Math.abs(maxIndex - minIndex);
            minDifference = Math.min(minDifference, difference);
        }
    }

    return minDifference>0? minDifference-1:minDifference;
}

// 测试用例
console.log(solution("111", "222") === 0);
console.log(solution("111", "34") === 1);
console.log(solution("5976762424003073", "6301027308640389") === 6);
