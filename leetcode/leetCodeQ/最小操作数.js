var minOperations = function(nums, k) {
    const set = new Set();
    for (const num of nums) {
        if (num < k) {
            return -1;
        } else if (num > k) {
            set.add(num);
        }
    }
    return set.size;
};