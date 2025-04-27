function format(str) {
    let num = Number(str);
    if (isNaN(num)) return '';
  
    let rounded = num.toFixed(2); 
    let [int, dec] = rounded.split('.');
  
    let result = '';
    let count = 0;
    for (let i = int.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        result = ',' + result;
      }
      result = int[i] + result;
      count++;
    }
  
    return result + '.' + dec;
  }
  
  console.log(format('12312.10623')); // 输出: 12,312.11
  console.log(format('123456789.999')); // 输出: 123,456,790.00